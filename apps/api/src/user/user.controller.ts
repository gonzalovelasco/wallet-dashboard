import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { type SetFavoriteDto, type UserDto } from "common";

@Controller("user")
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async getUser(): Promise<UserDto> {
    return this.usersService.getUser();
  }

  @Post("/set-favorite")
  async setFavoriteAddress(
    @Body() setFavoriteDto: SetFavoriteDto
  ): Promise<void> {
    await this.usersService.setFavoriteAddress(setFavoriteDto);
  }
}
