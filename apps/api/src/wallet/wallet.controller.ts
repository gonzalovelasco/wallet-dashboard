import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { type WalletDto } from "common";

@Controller("wallet")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  async addWallet(@Body() walletDto: WalletDto) {
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
