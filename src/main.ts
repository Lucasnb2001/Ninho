import { NestFactory } from '@nestjs/core';
//import { AppModule } from './app.module';
import { LivroModule } from './livro/livro.module';

async function bootstrap() {
  const app = await NestFactory.create(LivroModule);
  await app.listen(3000);
}
bootstrap();
