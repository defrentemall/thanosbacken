import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { altaagentes } from './alta_agente.entity';
import { AltaAgentesController } from './controllers/alta_agentes.controller';
import { AltaAgentesService } from './service/alta_agentes/alta_agentes.service';


@Module({
  imports: [TypeOrmModule.forFeature([altaagentes])],
  controllers: [AltaAgentesController],
  providers: [AltaAgentesService]
})
export class AltaAgentesModule {}


