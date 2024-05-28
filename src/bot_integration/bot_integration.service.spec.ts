import { Test, TestingModule } from '@nestjs/testing';
import { BotIntegrationService } from './bot_integration.service';

describe('BotIntegrationService', () => {
  let service: BotIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotIntegrationService],
    }).compile();

    service = module.get<BotIntegrationService>(BotIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
