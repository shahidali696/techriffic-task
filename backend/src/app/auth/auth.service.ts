import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/core/prisma.service';
import * as bcrypt from 'bcrypt';
import { EnvironmentService } from 'src/core/environments/environments.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async signIn(
    email: string,
    password: string,
  ) {
    try {
      const userData = await this.prisma.user.findFirst({
        where: {
          email
        }
      })
      if (userData) {
        const passwordCompared = await bcrypt.compare(password, userData.password)
        if (passwordCompared) {
          const payload = { sub: userData.id, username: userData.email };
          return {
            user: userData,
            access_token: await this.jwtService.signAsync(payload),
          };
        }
        return {
          message: 'Password does not match'
        };
      }
      return {
        message: 'User does not exits'
      };
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}