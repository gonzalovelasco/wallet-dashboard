import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/persistence/prisma/prisma.service";
import { type SetFavoriteDto, type UserDto } from "common";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(): Promise<UserDto> {
    const user = await this.prisma.user.findFirst();
    return user;
  }

  async setFavoriteAddress(setFavoriteDto: SetFavoriteDto): Promise<void> {
    const { userId, walletId } = setFavoriteDto;
    const wallet = await this.prisma.wallet.findFirstOrThrow({
      where: { id: walletId },
    });
    await this.prisma.user.update({
      where: { id: userId },
      data: { favoritesWallets: { create: [{ walletId: wallet.id }] } },
    });
  }
}
