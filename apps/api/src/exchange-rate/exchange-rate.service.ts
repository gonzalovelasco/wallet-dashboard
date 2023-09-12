import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/persistence/prisma/prisma.service";
import { type ExchangeRateDto } from "common";

@Injectable()
export class ExchangeRateService {
  constructor(private readonly prisma: PrismaService) {}

  async getExchangeRates(): Promise<ExchangeRateDto[]> {
    const exchangeRates = await this.prisma.exchangeRate.findMany();
    return exchangeRates;
  }

  async editExchangeRate(rateData: ExchangeRateDto) {
    const { id, rate, currency, toCurrency } = rateData;
    await this.prisma.exchangeRate.update({
      where: {
        id,
        currency,
        toCurrency,
      },
      data: {
        rate,
      },
    });
  }
}
