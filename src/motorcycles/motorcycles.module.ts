import { Module } from '@nestjs/common';
import { MotorcyclesService } from './motorcycles.service.js';
import { MotorcyclesController } from './motorcycles.controller.js';

@Module({
  controllers: [MotorcyclesController],
  providers: [MotorcyclesService],
})
export class MotorcyclesModule {}
