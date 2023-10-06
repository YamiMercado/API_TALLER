import { Injectable } from '@nestjs/common';
import { CreateMovementTypeDto } from './dto/create-movement_type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement_type.dto';
import { MovementType } from './entities/movement_type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovementTypeService {
  constructor(
    @InjectRepository(MovementType)
    private movementpeRepo : Repository<MovementType>
  ){ 
  }
  create(createMovementTypeDto: CreateMovementTypeDto) {
    return this.movementpeRepo.save([createMovementTypeDto]);
  }

  findAll() {
    return this.movementpeRepo.find();
  }

  findOne(id: number) {
    return this.movementpeRepo.findBy({id:id});
  }

  update(id: number, updateMovementTypeDto: UpdateMovementTypeDto) {
    return this.movementpeRepo.update(id, updateMovementTypeDto);
  }

  remove(id: number) {
    return this.movementpeRepo.delete(id);
  }
}
