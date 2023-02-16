import { Test, TestingModule } from '@nestjs/testing';
import { AltaAgentesController } from './alta_agentes.controller';

describe('AltaAgentesController', () => {
  let controller: AltaAgentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AltaAgentesController],
    }).compile();

    controller = module.get<AltaAgentesController>(AltaAgentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
