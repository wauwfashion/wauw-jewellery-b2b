import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Jsonify } from '@remix-run/server-runtime/dist/jsonify';
import { useFetcher, useLoaderData, useNavigate } from '@remix-run/react';
import {
  Page,
  TabProps,
  Tabs,
  Badge,
  TextField,
  EmptyState,
  Card,
} from '@shopify/polaris';
import { DeleteIcon, EditIcon, RefreshIcon } from '@shopify/polaris-icons';
import { Field, useForm } from '@shopify/react-form';
import { useAppBridge } from '@shopify/app-bridge-react';
import _ from 'lodash';

import * as shopifyProductTagsService from '@/services/shopify/tags.server';
import * as shopifyProductsService from '@/services/shopify/products.server';
import * as orderchampProductsService from '@/services/orderchamp/products.server';
import { fullRemoveProduct } from '@/api/products/full-remove-product';
import {
  ProductUpdateFields,
  UpdateVariantFields,
  useProductFormFields,
} from '@/hooks/use-product-form-fields';
import { handleApiResponse } from '@/utils/api-response-handler';
import { mapProductDetails } from '@/utils/map-product-details';
import { firstUpperCase } from '@/utils/string-utils';
import { generateUpdateProductFields } from '@/utils/generate-update-product-fields';
import { createNewProductUrl } from '@/utils/create-new-product-url';
import { authenticate } from '@/shopify.server';
import { platforms, statusBadgeProgress } from '@/constants';
import { Platform, ProductStatus } from '@/types';
import { OrderchampTag } from '@/services/orderchamp/types';
import {
  EmptyProductsPage,
  RemoveConfirmationModal,
} from '@/components/common';
import { OptionItem, ProductDetailsForm } from '@/components/forms';
import prisma from '@/db.server';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const productId = params.productId as string;

  const response = await handleApiResponse(
    async () => {
      const { admin, session } = await authenticate.admin(request);
      const { shop } = session;

      const shopInfo = await prisma.store.findFirst({
        where: {
          domain: shop,
        },
      });

      const shopifyTags =
        await shopifyProductTagsService.retrieveAllProductTags(admin.graphql);

      const product = await prisma.product.findFirst({
        where: {
          id: productId,
        },
        include: {
          platformProducts: true,
          variants: {
            include: {
              platformProductVariants: true,
            },
          },
        },
      });

      console.log({ product });

      return {
        product,
        createNewProductUrl: createNewProductUrl(shop),
        currencyCode: shopInfo?.currencyCode,
        tags: {
          [Platform.Shopify]: shopifyTags.map((tag) => ({
            label: tag,
            value: tag,
          })),
          [Platform.Orderchamp]: Object.entries(OrderchampTag).map(
            ([value, label]) => ({
              value: value as string,
              label: label as string,
            }),
          ),
          [Platform.Ankorstore]: [] as OptionItem[],
          [Platform.Faire]: [] as OptionItem[],
        },
      };
    },
    {
      onSuccess: {
        message: 'Product successfully received.',
        responseInitParams: {
          status: 200,
        },
      },
      onError: {
        message: 'Error occurred while receiving product.',
        responseInitParams: {
          status: 500,
        },
      },
    },
  );

  return response;
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const productId = params.productId as string;
  const method = request.method.toUpperCase();

  const response = await handleApiResponse(
    async () => {
      const { admin } = await authenticate.admin(request);

      const { fields, currentPlatform } = {
        ...Object.fromEntries(await request.formData()),
      };

      switch (method) {
        case 'DELETE': {
          await fullRemoveProduct(admin.graphql, productId);

          break;
        }

        case 'PATCH': {
          const { productFields, variantFields } = JSON.parse(
            fields as string,
          ) as ProductUpdateFields;

          const product = await prisma.product.findFirst({
            where: { id: productId },
            select: {
              hasOnlyDefaultVariant: true,
              variants: {
                select: {
                  platformProductVariants: {
                    select: {
                      id: true,
                      platform: true,
                      storefrontId: true,
                      title: true,
                    },
                  },
                },
              },
              platformProducts: {
                select: {
                  id: true,
                  platform: true,
                  storefrontId: true,
                },
              },
            },
          });

          const updateProductData = generateUpdateProductFields({
            currentPlatform: currentPlatform as Platform,
            product,
            productFields,
            variantFields,
          });

          console.log({
            currentPlatform,
            updateProductData,
            product,
            productFields,
            variantFields,
          });

          const updateHandlers: Record<Platform, Function> = {
            [Platform.Shopify]: async () =>
              shopifyProductsService.updateProduct(
                admin.graphql,
                updateProductData,
              ),
            [Platform.Orderchamp]: async () =>
              orderchampProductsService.updateProduct(updateProductData),
            [Platform.Faire]: async () => {},
            [Platform.Ankorstore]: async () => {},
          };

          await updateHandlers[currentPlatform as Platform]();

          break;
        }

        default:
          break;
      }

      return null;
    },
    {
      onSuccess: {
        message: 'Product successfully updated.',
        responseInitParams: {
          status: 200,
        },
      },
      onError: {
        message: 'Error occurred while updating product.',
        responseInitParams: {
          status: 500,
        },
      },
    },
  );

  return response;
};

export type SelectedTags = Jsonify<Record<Platform, string[]>>;

export default function ProductDetailsPage() {
  const loaderData = useLoaderData<typeof loader>();

  if (!loaderData?.data?.product && loaderData?.success) {
    return (
      <EmptyProductsPage
        createNewProductUrl={loaderData?.data?.createNewProductUrl!}
      />
    );
  }

  const appBridge = useAppBridge();
  const navigate = useNavigate();
  const [selectedPlatformTab, setSelectedPlatformTab] = useState(0);
  const [selectedVariantTab, setSelectedVariantTab] = useState(0);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const lastFormMethod = useRef<string | null>('GET');
  const {
    submit,
    state,
    data: actionData,
    formMethod,
  } = useFetcher<typeof action>();
  const [isPending, startTransition] = useTransition();
  const [selectedTags, setSelectedTags] = useState<SelectedTags>(
    {} as SelectedTags,
  );
  const prevTags = useRef<SelectedTags>({} as SelectedTags);
  const firstRender = useRef(true);

  const isLoading = useMemo(
    () => isPending || ['loading', 'submitting'].includes(state),
    [isPending, state],
  );

  const currentPlatform = useMemo(
    () => platforms?.[selectedPlatformTab] || platforms[0],
    [selectedPlatformTab, platforms],
  );

  const preparedData = useMemo(() => {
    if (!loaderData && !actionData) {
      return null;
    }

    return {
      ...loaderData,
      ...actionData,
      data: {
        ...loaderData.data,
        ...(actionData?.data || {}),
      },
    };
  }, [loaderData, actionData, currentPlatform]);

  const product = useMemo(
    () =>
      mapProductDetails(preparedData?.data?.product || null, currentPlatform),
    [preparedData, currentPlatform],
  );

  const { dirty, reset, fields } = useForm({
    fields: useProductFormFields(product),
  });

  const isDirtyForm = useMemo(() => {
    if (dirty) {
      return true;
    }

    if (!product) {
      return false;
    }

    const isTheSameTags =
      product.platformProduct.tags?.length ===
        selectedTags[currentPlatform]?.length &&
      selectedTags[currentPlatform].every((tag) =>
        product.platformProduct.tags.includes(tag),
      );

    return !isTheSameTags;
  }, [dirty, selectedTags, currentPlatform, product]);

  const hasFormErrors = useMemo(
    () => Object.values(fields).some((field) => !!field.error),
    [fields],
  );

  const tabs: TabProps[] = useMemo(
    () =>
      platforms.map((platform, idx) => ({
        id: `${platform}-${idx}`,
        panelID: `${platform}-content-${idx}`,
        content: platform,
        disabled: !(
          preparedData?.data.product?.platformProducts.map(
            (product) => product.platform,
          ) || [Platform.Shopify]
        ).includes(platform),
      })),
    [platforms, product],
  );

  const { availableTags, currentSelectedTags } = useMemo(() => {
    const currentSelectedTags = selectedTags[currentPlatform] || [];
    const availableTags =
      preparedData?.data?.tags?.[currentPlatform as Platform] || [];

    switch (currentPlatform) {
      case Platform.Shopify:
        return {
          currentSelectedTags: currentSelectedTags.map((tag) => ({
            label: tag,
            value: tag,
          })),
          availableTags,
        };

      case Platform.Orderchamp:
        return {
          currentSelectedTags: currentSelectedTags.map((tag) => ({
            label: OrderchampTag[tag as keyof typeof OrderchampTag],
            value: tag,
          })),
          availableTags,
        };

      case Platform.Ankorstore:
      case Platform.Faire:
      default:
        return {
          selectedTags: [],
          availableTags,
        };
    }
  }, [currentPlatform, preparedData, selectedTags]);

  const handleResetSelectedTags = useCallback(() => {
    if (!prevTags.current) {
      return;
    }

    setSelectedTags(prevTags.current);
  }, []);

  const onResetForm = useCallback(() => {
    reset();
    handleResetSelectedTags();
  }, [currentPlatform]);

  const handlePlatformTabChange = useCallback((index: number) => {
    setSelectedPlatformTab(index);
    onResetForm();
  }, []);

  const handleVariantTabChange = useCallback((index: number) => {
    setSelectedVariantTab(index);
  }, []);

  const handleSelectTags = useCallback(
    (value: string[]) => {
      setSelectedTags((prev) => ({
        ...prev,
        [currentPlatform]: value,
      }));
    },
    [currentPlatform],
  );

  const handleOpenRemoveModal = useCallback(() => {
    setIsRemoveModalOpen(true);
  }, []);

  const handleHideRemoveModal = useCallback(() => {
    setIsRemoveModalOpen(false);
  }, []);

  const handleRemoveProduct = useCallback(async () => {
    startTransition(() => {
      submit({}, { method: 'DELETE' });
    });
  }, []);

  const handleUpdateProduct = useCallback(async () => {
    if (hasFormErrors) {
      return;
    }

    const { title, description, status, ...variantFields } = fields;

    const productFields = Object.entries({ title, description, status }).reduce(
      (acc, [fieldKey, fieldValue]) => {
        const field = fieldValue as Field<string>;

        if (field.error) {
          return acc;
        }

        acc[fieldKey] = field.value;

        return acc;
      },
      {} as Record<string, string>,
    );

    const mappedVariantFields = Object.entries(
      variantFields as UpdateVariantFields,
    ).reduce(
      (acc, [outerKey, outerValue]) => {
        acc[outerKey] = Object.entries(outerValue).reduce(
          (innerAcc, [innerKey, { value }]) => {
            innerAcc[innerKey] = value;
            return innerAcc;
          },
          {} as Record<string, string>,
        );
        return acc;
      },
      {} as Record<string, Record<string, string>>,
    );

    const fieldsValues = {
      productFields: {
        ...productFields,
        tags: selectedTags[currentPlatform] || [],
      },
      variantFields: mappedVariantFields,
    };

    startTransition(() => {
      submit(
        {
          fields: JSON.stringify(fieldsValues),
          currentPlatform,
        },
        { method: 'PATCH' },
      );
    });
  }, [fields, hasFormErrors, selectedTags, currentPlatform]);

  useEffect(() => {
    if (!preparedData?.data?.product || !firstRender.current) {
      return;
    }

    const tagsByProductPlatform =
      preparedData?.data.product.platformProducts.reduce((acc, product) => {
        acc[product.platform] = product.tags;

        return acc;
      }, {} as SelectedTags);

    setSelectedTags(tagsByProductPlatform);
    prevTags.current = tagsByProductPlatform;

    firstRender.current = false;
  }, [preparedData, currentPlatform]);

  useEffect(() => {
    if (formMethod) {
      lastFormMethod.current = formMethod;
    }
  }, [formMethod]);

  useEffect(() => {
    if (!preparedData?.success && preparedData?.message) {
      appBridge?.toast.show(preparedData?.message, {
        isError: !preparedData.success,
      });
    }
  }, [preparedData]);

  useEffect(() => {
    if (
      !isLoading &&
      lastFormMethod.current === 'DELETE' &&
      preparedData?.success
    ) {
      appBridge?.toast.show('Product successfully deleted.');
      handleHideRemoveModal();
      lastFormMethod.current = null;
      navigate('/app');
    }

    if (
      !isLoading &&
      lastFormMethod.current === 'PATCH' &&
      preparedData?.success
    ) {
      appBridge?.toast.show('Product successfully updated.');
      lastFormMethod.current = null;
      prevTags.current = selectedTags;
    }
  }, [preparedData, appBridge, formMethod, selectedTags, isLoading]);

  if (!preparedData?.data?.product && preparedData?.success) {
    return (
      <EmptyProductsPage
        createNewProductUrl={preparedData?.data?.createNewProductUrl!}
      />
    );
  }

  return (
    <Page
      title={product?.platformProduct.title}
      titleMetadata={
        product?.platformProduct.status && (
          <Badge
            tone={
              statusBadgeProgress[
                product?.platformProduct.status as ProductStatus
              ]
            }
          >
            {firstUpperCase(product.platformProduct.status)}
          </Badge>
        )
      }
      backAction={{ content: 'Product', url: '/app' }}
      primaryAction={{
        content: 'Save',
        icon: EditIcon,
        loading: isLoading,
        accessibilityLabel: 'Save action label',
        helpText: 'Save',
        disabled: !isDirtyForm || hasFormErrors,
        onAction: handleUpdateProduct,
      }}
      secondaryActions={[
        {
          content: 'Delete',
          icon: DeleteIcon,
          destructive: true,
          disabled: isLoading,
          accessibilityLabel: 'Open delete modal action label',
          onAction: handleOpenRemoveModal,
        },
        {
          content: 'Discard',
          icon: RefreshIcon,
          disabled: isLoading || !isDirtyForm,
          accessibilityLabel: 'Discard changes action label',
          onAction: onResetForm,
        },
      ]}
    >
      <Tabs
        tabs={tabs}
        selected={selectedPlatformTab}
        onSelect={handlePlatformTabChange}
      >
        {!product?.variants?.length ? (
          <Card>
            <EmptyState
              heading="Manage your product"
              action={{
                content: 'Remove product',
                onAction: handleOpenRemoveModal,
                destructive: true,
              }}
              secondaryAction={{
                content: 'Back to Products',
                url: '/app',
              }}
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            >
              <p>Track and receive your products.</p>
            </EmptyState>
          </Card>
        ) : (
          <ProductDetailsForm
            key={currentPlatform}
            selectedVariantTab={selectedVariantTab}
            onSelectVariantTab={handleVariantTabChange}
            onReset={onResetForm}
            onSubmit={handleUpdateProduct}
            currentPlatform={currentPlatform}
            currencyCode={preparedData?.data.currencyCode!}
            sourceUrl={product?.platformProduct.sourceUrl!}
            availableTags={availableTags}
            onSelectTags={handleSelectTags}
            selectedTags={currentSelectedTags || []}
            product={product}
            fields={fields}
          />
        )}
      </Tabs>
      <RemoveConfirmationModal
        isOpen={isRemoveModalOpen}
        onClose={handleHideRemoveModal}
        sourceName={product?.platformProduct.title!}
        resourceName="product"
        isLoading={isLoading}
        onAction={handleRemoveProduct}
      />
    </Page>
  );
}
