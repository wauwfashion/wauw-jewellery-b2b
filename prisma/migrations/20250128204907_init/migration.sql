/*
  Warnings:

  - You are about to drop the column `shopify_storefront_id` on the `product_variants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storefront_id]` on the table `platform_products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shopify_variant_storefront_id]` on the table `product_variants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shopify_product_storefront_id]` on the table `product_variants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shopify_product_storefront_id,shopify_variant_storefront_id]` on the table `product_variants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shopify_product_storefront_id` to the `product_variants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopify_variant_storefront_id` to the `product_variants` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "product_variants_shopify_storefront_id_key";

-- AlterTable
ALTER TABLE "product_variants" DROP COLUMN "shopify_storefront_id",
ADD COLUMN     "shopify_product_storefront_id" TEXT NOT NULL,
ADD COLUMN     "shopify_variant_storefront_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "platform_products_storefront_id_key" ON "platform_products"("storefront_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_shopify_variant_storefront_id_key" ON "product_variants"("shopify_variant_storefront_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_shopify_product_storefront_id_key" ON "product_variants"("shopify_product_storefront_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_shopify_product_storefront_id_shopify_vari_key" ON "product_variants"("shopify_product_storefront_id", "shopify_variant_storefront_id");
