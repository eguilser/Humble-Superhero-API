import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS para permitir requests desde otro origen (p. ej. :3000)
  app.enableCors();
  await app.listen(4000);
  console.log(`Application is running on: http://localhost:4000`);
}
bootstrap();
