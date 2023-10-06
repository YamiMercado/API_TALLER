import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { Repository } from 'typeorm';
import { Movement } from './entities/movement.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovementsService {
  constructor(
    @InjectRepository(Movement)
    private movementpeRepo : Repository<Movement>
  ){ 
  }
  create(createMovementDto: CreateMovementDto) {
    return this.movementpeRepo.save([createMovementDto]);
  }

  findAll() {
    return this.movementpeRepo.find();
  }

  findOne(id: number) {
    return this.movementpeRepo.findBy({id:id});
  }

  update(id: number, updateMovementDto: UpdateMovementDto) {
    return this.movementpeRepo.update(id,updateMovementDto);
  }

  remove(id: number) {
    return this.movementpeRepo.delete(id);
  }
}
