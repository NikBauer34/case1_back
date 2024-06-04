import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LibraryModule } from 'src/library/library.module';
import { JwtModule } from '@nestjs/jwt';
import { WorkerModule } from 'src/worker/worker.module';
import { WorkerService } from 'src/worker/worker.service';
import { RoleModule } from 'src/role/role.module';
import { TokenService } from 'src/jwt/token.service';
import { TokenModule } from 'src/jwt/token.module';


@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => WorkerModule),
    RoleModule,
    forwardRef(() => LibraryModule),
    TokenModule,
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
