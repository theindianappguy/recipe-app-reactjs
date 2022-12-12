import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { UserService } from '../user/user.service';
import { JwtPayload } from './payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.login(username);
    // const isMatch = await bcrypt.compare(pass, user.password);
    if (user && pass===user.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
    if (user === null)
      throw new HttpException('Incorrect password', HttpStatus.NOT_FOUND);
    const payload: JwtPayload = {
      email: loginUserDto.email,
    };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
