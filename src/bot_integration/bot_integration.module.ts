import { Module } from '@nestjs/common';
import { BotIntegrationService } from './bot_integration.service';

@Module({
  providers: [BotIntegrationService]
})
export class BotIntegrationModule {}
