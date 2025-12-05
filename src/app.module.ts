import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { loginMid } from './login.mid';
import { userModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
MongooseModule.forRoot('mongodb://localhost/salom'),
    
    userModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".test.env"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loginMid)
      .exclude('/users/login')
      .forRoutes('*')

  }
}
