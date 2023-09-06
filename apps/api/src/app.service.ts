import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getServerStatus(): Promise<{ message: string }> {
    return { message: 'Api Server running' };
  }
}
