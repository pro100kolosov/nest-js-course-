import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // теперь все запросы к API должны иметь в своём URL сначала /api
  await app.listen(3000);
}
bootstrap();
