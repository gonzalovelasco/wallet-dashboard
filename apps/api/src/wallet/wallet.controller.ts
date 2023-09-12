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

  @Post()
  async addWallet(@Body() walletDto: WalletDto) {
    if (!isAddress(walletDto.address)) {
      throw new HttpException("Invalid address", HttpStatus.BAD_REQUEST);
    }
    await this.walletService.addWalletAddress(walletDto.address);
    return "Wallet address added successfully";
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
