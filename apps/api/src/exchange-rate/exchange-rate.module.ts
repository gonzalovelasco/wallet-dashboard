import { Module } from "@nestjs/common";
import { ExchangeRateService } from "./exchange-rate.service";
import { ExchangeRateController } from "./exchange-rate.controller";
import { PrismaService } from "../persistence/prisma/prisma.service";

@Module({
  providers: [ExchangeRateService, PrismaService],
  controllers: [ExchangeRateController],
})
export class ExchangeRateModule {}
