import { Test, TestingModule } from '@nestjs/testing';
import { AltaAgentesService } from './alta_agentes.service';

describe('AltaAgentesService', () => {
  let service: AltaAgentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AltaAgentesService],
    }).compile();

    service = module.get<AltaAgentesService>(AltaAgentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
