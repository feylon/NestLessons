import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  let app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api/v1');
  app.enableCors([{
    origin: 'http://localhost:5500',
    methods: 'HEAD,PUT,PATCH,POST,DELETE',
  }]);


  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted : true,
    whitelist : true,
    transform : true

  }));

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();