import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { ExchangeRateService } from "./exchange-rate.service";
import { type ExchangeRateDto } from "common";

@Controller("exchange-rate")
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @Get()
  async getExchangeRates() {
    return this.exchangeRateService.getExchangeRates();
  }

  @Put("edit")
  async editExchangeRate(@Body() rateData: ExchangeRateDto) {
    return this.exchangeRateService.editExchangeRate(rateData);
  }
}
