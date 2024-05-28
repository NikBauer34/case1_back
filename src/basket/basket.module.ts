import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './basket.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Basket])
  ],
  providers: [BasketService]
})
export class BasketModule {}
