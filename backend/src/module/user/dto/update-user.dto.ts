import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phoneNumber:number;
}
