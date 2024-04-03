import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'
@Module({
  imports: [
    SequelizeModule.forRoot({
      uri: 'postgres://user:TrSvFzjgZpjTxOI5s3lbgbKOKbuWFesi@dpg-co6n8fcf7o1s73dn05q0-a/unilib_db',
      models: [],
      autoLoadModels: true
      //postgres://user:TrSvFzjgZpjTxOI5s3lbgbKOKbuWFesi@dpg-co6n8fcf7o1s73dn05q0-a/unilib_db
      //postgres://postgres:9a10ur1Z@localhost/unilib
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
