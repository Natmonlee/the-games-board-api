import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://natmonlee.github.io/the-games-board',
    ],
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap().catch((error) => {
  console.error('Error during bootstrapping:', error);
  process.exit(1);
});
