/*
  Warnings:

  - A unique constraint covering the columns `[currency,toCurrency]` on the table `ExchangeRate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExchangeRate_currency_toCurrency_key" ON "ExchangeRate"("currency", "toCurrency");
