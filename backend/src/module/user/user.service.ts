import { UpdatePasswordDto } from './dto/update-password.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtPayload } from '../auth/payload.interface';
import { ForgotPassword } from './dto/forgot-password.dto';

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
    // createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
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
      return this.userRepo.save(updateUserDto);
    }
    return `Accout khong ton tai`;
  }
  async forgotpassword(forgotpassword: ForgotPassword) {
    const user = await this.userRepo.findOne({
      where: { email: forgotpassword.email },
    });
    if (
      user.qid === forgotpassword.qid &&
      user.answer === forgotpassword.answer
    ) {
      return user.password;
    }
    return `Câu trả lời không đúng`;
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

  async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    const user: User = await this.userRepo.findOne({ where: { id: id } });
    if (user) {
      // user.password = await bcrypt.hash(updatePasswordDto.password, 10);
      user.password = updatePasswordDto.password;
      return this.userRepo.save(user);
    }
    return `Accout khong ton tai`;
  }
}
