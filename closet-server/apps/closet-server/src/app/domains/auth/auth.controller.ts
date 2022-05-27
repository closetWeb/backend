import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';

import { AuthService } from "@closet-web/backend";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('sign-in')
    async signIn(
        @Body() body
    ) {
        await this.authService.signIn(body)
    }

    @Post('sign-up')
    async signUp(
        @Body() body
    ) {
        const result = await this.authService.signUp(body);
        return true;
    }
}
