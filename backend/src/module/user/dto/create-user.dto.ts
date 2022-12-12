import { ApiProperty } from '@nestjs/swagger';
enum Gender {
  FEMALE,
  MALE,
}
export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  qid: number;

  @ApiProperty()
  answer: string;
}
