import { Module, forwardRef } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from './worker.model';
import { Worker_Role } from './worker-role.model';
import { RoleModule } from '../role/role.module'
import { LibraryModule } from '../library/library.module'

@Module({
  imports: [
    SequelizeModule.forFeature([Worker, Worker_Role]),
    forwardRef(() => LibraryModule),
    RoleModule,
  ],
  providers: [WorkerService],
  exports: [WorkerService]
})
export class WorkerModule {}
