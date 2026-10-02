import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMotorcycleDto } from './dto/create-motorcycle.dto.js';
import { UpdateMotorcycleDto } from './dto/update-motorcycle.dto.js';
import { Motorcycle } from './entities/motorcycle.entity.js';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MotorcyclesService {
  private motorcycles: Motorcycle[] = [];

  create(createMotorcycleDto: CreateMotorcycleDto) {
    const { marca, modelo, cilindrada, año } = createMotorcycleDto;
    const newMotorcycle = new Motorcycle(
      uuidv4(),
      marca,
      modelo,
      cilindrada,
      año,
    );
    this.motorcycles.push(newMotorcycle);
    return newMotorcycle;
  
  }

  findAll() {
    return this.motorcycles;
  }

  findOne(id: string) {
    const motorcycle = this.motorcycles.find((m) => m.id === id);
    if (!motorcycle) {
      throw new NotFoundException(`Motorcycle with ID "${id}" not found`);
    }
    return motorcycle;
  }

  update(id: string, updateMotorcycleDto: UpdateMotorcycleDto) {
    const motorcycle = this.findOne(id);
    Object.assign(motorcycle, updateMotorcycleDto);
    return motorcycle;
  }

  remove(id: string) {
    this.findOne(id);
    this.motorcycles = this.motorcycles.filter((m) => m.id !== id);
    return {
      message: `Motorcycle with ID "${id}" deleted successfully`,
    };
  }
}