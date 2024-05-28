import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginWorkerDto } from 'src/worker/dto/login-worker.dto';
import { CreateWorkerDto } from 'src/worker/dto/create-worker.dto';
import { InitWorkerDto } from 'src/worker/dto/init-worker.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() dto: LoginWorkerDto) {

    return this.authService.login(dto)
  }

  @Post('/registration')
  async registration(@Body() dto: {worker: CreateWorkerDto, role: string, library_id: number}) {
    return this.authService.registration(dto.worker, dto.role, dto.library_id)
  }
  @Post('/init')
  async initialization(@Body() dto: InitWorkerDto) {
    return this.authService.initialize(dto)
  }
}
