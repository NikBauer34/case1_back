import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: 'dthtjh',
    
  })],
  providers: [TokenService],
  exports: [TokenService,
    JwtModule
  ]
})
export class TokenModule {}
