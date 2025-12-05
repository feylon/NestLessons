import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    forbidNonWhitelisted : true,
    whitelist : true
  }));

const config = new DocumentBuilder()
    .setTitle('Hujjat')
    .setDescription('Hujjat 1301')
    .setVersion('1.0')
    .addTag('cats')
    .addBasicAuth()
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
  swaggerOptions: {
    authAction: {
      // Swagger UI ochilganda login prompt bo'lishi uchun
      basicAuth: {
        name: 'basicAuth',
        schema: {
          type: 'basic',
        },
        value: {
          username: 'admin', // 🔑 login
          password: '12345', // 🔐 parol
        },
      },
    },
  },
})
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
