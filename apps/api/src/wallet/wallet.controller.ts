import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { isAddress } from "web3-validator";
import { WalletService } from "./wallet.service";
import { type WalletDto } from "common";

@Controller("wallet")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  convertUnixTimestampToDateTime(unixTimestamp: number): Date {
    const milliseconds = unixTimestamp * 1000; // Convert to milliseconds
    return new Date(milliseconds);
  }

  @Post()
  async addWallet(@Body() walletDto: WalletDto) {
    if (!isAddress(walletDto.address)) {
      throw new HttpException("Invalid address", HttpStatus.BAD_REQUEST);
    }
    const response = await this.walletService.getWalletInfo(walletDto.address);
    if (response && response.result.length > 0) {
      console.log(
        this.convertUnixTimestampToDateTime(response.result[0].timeStamp)
      );
      walletDto.firstTransaction = this.convertUnixTimestampToDateTime(
        response.result[0].timeStamp
      );
    }
    await this.walletService.addWalletAddress(walletDto);
    return;
  }

  @Get()
  getWallets(): Promise<WalletDto[]> {
    return this.walletService.getWalletAddresses();
  }

  @Get(":address")
  async getWalletInfo(@Param("address") address: string) {
    try {
      return this.walletService.getWalletAddress(address);
    } catch (error) {
      throw error;
    }
  }
}
