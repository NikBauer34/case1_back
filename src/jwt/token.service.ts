import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}
  sign(payload: any) {
    const token = this.jwtService.sign(payload)
    return token
  }
  verify(token: string) {
    const data = this.jwtService.verify(token)
    return data
  }
}
