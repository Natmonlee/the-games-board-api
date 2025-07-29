import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  console.log('starting app');

  app.enableCors({
    origin: [/^(http:\/\/localhost:\d+)$/, 'http://51.21.202.149'],
    credentials: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    methods: 'GET, POST, PATCH, DELETE',
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap().catch((error) => {
  console.error('Error during bootstrapping:', error);
  process.exit(1);
});
