import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Book])
  ],
  providers: [BookService]
})
export class BookModule {}
