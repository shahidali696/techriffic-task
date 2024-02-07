import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { EnvironmentService } from './core/environments/environments.service';
import { UserService } from './app/user/user.service';
import { AuthService } from './app/auth/auth.service';
import { ProductsModule } from './app/products/products.module';

@Module({
  imports: [AuthModule, UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, EnvironmentService],
})
export class AppModule { }
