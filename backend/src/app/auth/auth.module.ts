import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/core/prisma.service';
import { config } from '../../core/environments/constant';
import { EnvironmentService } from 'src/core/environments/environments.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: config.jwt.secret,
      signOptions: { expiresIn: config.jwt.expiry },
    }),
  ],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }