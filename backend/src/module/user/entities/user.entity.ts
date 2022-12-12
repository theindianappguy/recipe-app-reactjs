import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  gender: string;

  @Column()
  birth_date: Date;

  @Column()
  phone: string;

  @Column()
  qid: number;

  @Column()
  answer: string;
}
