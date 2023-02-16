import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AltaAgentesModule } from './alta_agentes/alta_agentes.module';
import { TypeOrmModule } from '@nestjs/typeorm' 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: 'Papel*21',
      database: 'thanos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AltaAgentesModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
