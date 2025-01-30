export const createNewProductUrl = (shopDomain: string) => {
  const shopName = shopDomain.replace('.myshopify.com', '');

  return `https://admin.shopify.com/store/${shopName}/products/new`;
};
