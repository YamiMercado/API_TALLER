import { Module } from '@nestjs/common';
import { MovementTypeService } from './movement_type.service';
import { MovementTypeController } from './movement_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovementType } from './entities/movement_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovementType])],
  controllers: [MovementTypeController],
  providers: [MovementTypeService],
})
export class MovementTypeModule {}
