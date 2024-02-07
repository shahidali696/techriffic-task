import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  create(@Body() body: any) {
    const { email, password } = body
    return this.authService.signIn(email, password);
  }
}
