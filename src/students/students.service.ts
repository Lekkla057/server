import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from './students.entity';
import { createQueryBuilder } from 'typeorm';
import { count, log } from 'console';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(student)
    private readonly studentRepository: Repository<student>,
  ) {}

  async createOrUpdate(student: student): Promise<student> {
    return await this.studentRepository.save(student);
  }

  async findOne(id: number): Promise<student> {
    return await this.studentRepository.findOne({ id: id });
  }

  async findAll(): Promise<student[]> {
    const fff = this.studentRepository
      .createQueryBuilder('student')
      .select('student.name', 'name')
      .addSelect('student.surname', 'surname')
      .addSelect('count(*)', 'count')
      .groupBy('student.name');
    const fffff = await fff.limit(2).offset(2).getRawMany();

    
    console.log(fffff);

    return await this.studentRepository.find();
  }

  async delete(id: number): Promise<any> {
    return await this.studentRepository.delete({ id: id });
  }
}
