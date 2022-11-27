import { ApiProperty } from '@nestjs/swagger';
enum Gender {
  FEMALE,
  MALE ,
}
export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
  
  // @ApiProperty()
  // gender: Gender;
   
  // @ApiProperty()
  // birth_date:Date;

  // @ApiProperty()
  // phone:number;
}
