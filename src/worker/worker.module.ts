import { Module, forwardRef } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from './worker.model';
import { Worker_Role } from './worker-role.model';
import { RoleModule } from '../role/role.module'
import { LibraryModule } from '../library/library.module'
import { WorkerController } from './worker.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/jwt/token.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Worker, Worker_Role]),
    forwardRef(() => LibraryModule),
    RoleModule,
    forwardRef(() => AuthModule),
    TokenModule
  ],
  providers: [WorkerService],
  exports: [WorkerService],
  controllers: [WorkerController]
})
export class WorkerModule {}
