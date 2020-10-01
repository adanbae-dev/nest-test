import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // request 막기
      transform: true, // 변경 -> 자동으로타입 변경해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
