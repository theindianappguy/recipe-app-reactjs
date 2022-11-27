import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtPayload } from '../auth/payload.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
  async createAdmin(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return this.userRepo.save(createUserDto);
  }
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id: id } });
  }
  findName(name: string) {
    return this.userRepo.findOne({ where: { username: name } });
  }
  async login(email: string) {
    const user = await this.userRepo.findOne({ where: { email: email } });
    if (!user)
      throw new HttpException('Email does not exist', HttpStatus.NOT_FOUND);
    return user;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    if (this.userRepo.findOne({ where: { id: id } })) {
      updateUserDto.id = id;
      console.log(updateUserDto);
      return this.userRepo.save(updateUserDto);
    }
    return `Accout khong ton tai`;
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
  async userExist({ email }: JwtPayload) {
    const user = await this.userRepo.findOne({
      where: { email: email },
    });
    if (!user) throw new HttpException('invalidToken', HttpStatus.UNAUTHORIZED);
    return user;
  }
}
