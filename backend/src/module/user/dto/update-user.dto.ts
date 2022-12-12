import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  id: number;
  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  birth_date: Date;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  gender: string;
}
