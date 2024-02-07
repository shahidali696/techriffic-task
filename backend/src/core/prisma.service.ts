import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// Create an instance of the Prisma client
const prisma = new PrismaClient();
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            console.log('Closing Prisma client...');
            await prisma.$disconnect();
        });
    }
}
