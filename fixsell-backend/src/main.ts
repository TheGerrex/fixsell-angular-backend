import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // load .env file
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  // server port
  const port = configService.get('SERVER_PORT');

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);

  
}
bootstrap();
