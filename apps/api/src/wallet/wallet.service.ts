import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../persistence/prisma/prisma.service"; // Import your PrismaService
import { type WalletDto } from "common";

@Injectable()
export class WalletService {
  private etherScanApiKey: string;

  constructor(
    private configService: ConfigService,
    private readonly prismaService: PrismaService
  ) {
    this.etherScanApiKey = this.configService.get<string>("ETHERSCAN_API_KEY");
  }

  async addWalletAddress(wallet: WalletDto): Promise<void> {
    await this.prismaService.wallet.create({
      data: {
        address: wallet.address,
        firstTransaction: wallet.firstTransaction,
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

  async getWalletInfo(walletAddress: string): Promise<any> {
    const apiKey = this.etherScanApiKey;
    const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&sort=asc&page=1&offset=10&apikey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(
          `Etherscan API request failed with status: ${response.status}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
