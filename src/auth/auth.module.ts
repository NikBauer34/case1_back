import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LibraryModule } from 'src/library/library.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { WorkerModule } from 'src/worker/worker.module';
import { WorkerService } from 'src/worker/worker.service';
import { RoleModule } from 'src/role/role.module';


@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    WorkerModule,
    RoleModule,
    forwardRef(() => LibraryModule),
    JwtModule.register({
      secret: 'dthtjh',
      
    })
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
