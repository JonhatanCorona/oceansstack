import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: [
    'http://localhost:5173',                 // desarrollo
    'https://oceansstack.vercel.app',       // producción
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
});

  const config = new DocumentBuilder()
    .setTitle('OceansStack API')
    .setDescription('API para gestión de órdenes y productos en restaurante')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(process.env.PORT ?? 3004);
}
bootstrap();
