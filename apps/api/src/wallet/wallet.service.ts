import { Injectable } from "@nestjs/common";
import { PrismaService } from "../persistence/prisma/prisma.service"; // Import your PrismaService
import { type WalletDto } from "common";

@Injectable()
export class WalletService {
  constructor(private readonly prismaService: PrismaService) {}

  async addWalletAddress(address: string): Promise<void> {
    await this.prismaService.wallet.create({
      data: {
        address,
      },
    });
  }

  async getWalletAddresses(): Promise<WalletDto[]> {
    const wallets = await this.prismaService.wallet.findMany();
    return wallets;
  }

  async getWalletAddress(address: string): Promise<string> {
    const wallet = await this.prismaService.wallet.findUnique({
      where: { address },
    });
    return wallet.address;
  }
}
