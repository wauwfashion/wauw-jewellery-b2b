-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('ACTIVE', 'ARCHIVED', 'DRAFT');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('Shopify', 'Orderchamp', 'Faire', 'Ankorstore');

-- CreateEnum
CREATE TYPE "OrderPaymentStatus" AS ENUM ('AUTHORIZED', 'EXPIRED', 'PAID', 'PARTIALLY_PAID', 'PARTIALLY_REFUNDED', 'PENDING', 'REFUNDED', 'VOIDED');

-- CreateEnum
CREATE TYPE "OrderFulfillmentStatus" AS ENUM ('FULFILLED', 'IN_PROGRESS', 'ON_HOLD', 'OPEN', 'PARTIALLY_FULFILLED', 'PENDING_FULFILLMENT', 'RESTOCKED', 'SCHEDULED', 'UNFULFILLED');

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "is_online" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" TIMESTAMP(3),
    "access_token" TEXT NOT NULL,
    "user_id" BIGINT,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "account_owner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "email_verified" BOOLEAN DEFAULT false,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "currency_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_products_sync_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "shopify_storefront_id" TEXT NOT NULL,
    "store_domain" TEXT NOT NULL,
    "variants_count" INTEGER,
    "has_only_default_variant" BOOLEAN,
    "total_inventory" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_variants" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "shopify_variant_storefront_id" TEXT NOT NULL,
    "shopify_product_storefront_id" TEXT NOT NULL,
    "inventory_quantity" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform_products" (
    "id" TEXT NOT NULL,
    "storefront_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "platform" "Platform" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "tags" TEXT[],
    "status" "ProductStatus",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform_product_variants" (
    "id" TEXT NOT NULL,
    "storefront_id" TEXT NOT NULL,
    "product_variant_id" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "price" TEXT,
    "title" TEXT NOT NULL,
    "barcode" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_product_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "store_domain" TEXT NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL,
    "currency_code" TEXT NOT NULL,
    "storefront_id" TEXT NOT NULL,
    "payment_status" "OrderPaymentStatus" NOT NULL,
    "fulfillment_status" "OrderFulfillmentStatus" NOT NULL,
    "platform" "Platform" NOT NULL,
    "line_items_count" INTEGER NOT NULL,
    "tags" TEXT[],
    "source_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stores_domain_key" ON "stores"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "products_shopify_storefront_id_key" ON "products"("shopify_storefront_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_shopify_variant_storefront_id_key" ON "product_variants"("shopify_variant_storefront_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_shopify_product_storefront_id_shopify_vari_key" ON "product_variants"("shopify_product_storefront_id", "shopify_variant_storefront_id");

-- CreateIndex
CREATE UNIQUE INDEX "platform_products_storefront_id_key" ON "platform_products"("storefront_id");

-- CreateIndex
CREATE INDEX "platform_products_platform_product_id_idx" ON "platform_products"("platform", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "platform_product_variants_storefront_id_key" ON "platform_product_variants"("storefront_id");

-- CreateIndex
CREATE INDEX "platform_product_variants_platform_product_variant_id_idx" ON "platform_product_variants"("platform", "product_variant_id");

-- CreateIndex
CREATE UNIQUE INDEX "orders_storefront_id_key" ON "orders"("storefront_id");

-- AddForeignKey
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "platform_products" ADD CONSTRAINT "platform_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "platform_product_variants" ADD CONSTRAINT "platform_product_variants_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
