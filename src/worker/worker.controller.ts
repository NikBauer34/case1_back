import { Body, Controller, Get, UseGuards, Headers } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';

@Controller('worker')
export class WorkerController {
  constructor(private workerService: WorkerService) {}

  @UseGuards(JwtAuthGuard)
  @Get('init_data')
  async initialize(@Headers() headers: Record<"authorization", string>) {
    console.log('here')
    return this.workerService.getInitData(headers.authorization.split(' ')[1])
  }
}
