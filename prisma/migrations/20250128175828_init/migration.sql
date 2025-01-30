/*
  Warnings:

  - You are about to drop the column `last_sync_at` on the `stores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shopify_storefront_id]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shopify_storefront_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "shopify_storefront_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "stores" DROP COLUMN "last_sync_at",
ADD COLUMN     "last_products_sync_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "products_shopify_storefront_id_key" ON "products"("shopify_storefront_id");
