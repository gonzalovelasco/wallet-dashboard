import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { validationSchemaForEnv } from "./config/environment-variables";
import { PersistenceModule } from "./persistence/persistence.module";
import { WalletModule } from "./wallet/wallet.module";
import { UserModule } from "./user/user.module";
import { ExchangeRateModule } from "./exchange-rate/exchange-rate.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationSchemaForEnv,
    }),
    PersistenceModule,
    WalletModule,
    UserModule,
    ExchangeRateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
