import { Module } from '@nestjs/common';
import { TextbookService } from './textbook.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Textbook } from './textbook.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Textbook])
  ],
  providers: [TextbookService]
})
export class TextbookModule {}
