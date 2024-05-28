import { Controller, Get } from '@nestjs/common';
import { CloudService } from './cloud.service';
import * as path from 'path'

@Controller('cloud')
export class CloudController {
  constructor(private cloudService: CloudService) {}

  @Get('/')
  async upload() {
    return this.cloudService.uploadInvitation(path.resolve(__dirname, './photo.jpg'))
  }
}
