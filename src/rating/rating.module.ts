import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rating } from './rating.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Rating])
  ],
  providers: [RatingService]
})
export class RatingModule {}
