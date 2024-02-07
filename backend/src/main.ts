import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaService } from './core/prisma.service';
import { EnvironmentService } from './core/environments/environments.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const environmentService = app.get(EnvironmentService);
  const PORT = environmentService.getApplicationPort();
  const SERVER = environmentService.getServer();
  app.enableCors({ origin: `*` });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder().setTitle('Tesk Test')
    .setDescription("This is the complete task API Docs")
    .setVersion('v1')
    .addTag('Task Products')
    .addBearerAuth()
    .addServer(SERVER)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const server = await app.listen(PORT);

  server.setTimeout(1000 * 60 * 10);
  console.log(`🚀  Server ready at ${SERVER}`);
}
bootstrap();
