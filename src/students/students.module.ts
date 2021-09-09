import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './students.entity';
@Module({
  imports: [TypeOrmModule.forFeature([student])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
