import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Item])
  ],
  providers: [ItemService]
})
export class ItemModule {}
