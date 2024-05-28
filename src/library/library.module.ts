import { Module, forwardRef } from '@nestjs/common';
import { LibraryService } from './library.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Library } from './library.model';
import { WorkerModule } from '../worker/worker.module'
import { LibraryController } from './library.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([Library]),
    forwardRef(() => WorkerModule),
  ],
  providers: [LibraryService],
  exports: [
    LibraryService
  ],
  controllers: [LibraryController]
})
export class LibraryModule {}
