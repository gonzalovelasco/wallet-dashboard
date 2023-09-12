/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ExchangeRate` table. All the data in the column will be lost.
  - Added the required column `toCurrency` to the `ExchangeRate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExchangeRate" DROP COLUMN "createdAt",
ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "toCurrency" TEXT NOT NULL;
