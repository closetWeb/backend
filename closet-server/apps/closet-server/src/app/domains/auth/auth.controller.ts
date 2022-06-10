import { Body, Controller, HttpException, Post } from '@nestjs/common';

import { AuthService } from '@closet-web/backend';
import { AppRequestPostSignInDto, AppRequestPostSignUpDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('sign-in')
  async signIn(@Body() body: AppRequestPostSignInDto) {
    try {
      const token = await this.authService.signIn(body);
      return token;
    } catch (e) {
      console.log(e)
      throw new HttpException(e.message, 400);
    }
  }

  @Post('sign-up')
  async signUp(@Body() body: AppRequestPostSignUpDto) {
    try {
      await this.authService.signUp(body);
      return true;
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  }
}
