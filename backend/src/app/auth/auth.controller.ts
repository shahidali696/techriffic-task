import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async create(@Body() body: any) {
    console.log('Here is login body', body)
    const { email, password } = body
    const res = await this.authService.signIn(email, password);
    console.log('Here is login body', res)

    return res
  }
}
