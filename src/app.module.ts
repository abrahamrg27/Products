import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module.js';
import { MotorcyclesModule } from './motorcycles/motorcycles.module.js';

@Module({
  imports: [ProductsModule, MotorcyclesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
