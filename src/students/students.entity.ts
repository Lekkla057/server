import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  surname: string;
}