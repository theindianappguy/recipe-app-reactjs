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
  gender:number;

  @Column()
  birth_date:Date;

  @Column()
  phone:number;

}
