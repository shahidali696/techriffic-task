import { Injectable } from '@nestjs/common';
import 'dotenv/config'

@Injectable()
export class EnvironmentService {
  getApplicationPort(): number {
    return +process.env.PORT || 4000;
  }

  getJWTSecret(): string {
    return process.env.JWT_SECRET_KEY || '@982ab34e7f9cdb';
  }

  getJWTExpires(): string {
    return process.env.JWT_EXPIRES || '7d';
  }

  getServer(): string {
    return (
      process.env.SERVER || `http://localhost:${this.getApplicationPort()}`
    );
  }
  getFrontend(): string {
    return process.env.SERVER || `http://localhost:5173`;
  }
}
