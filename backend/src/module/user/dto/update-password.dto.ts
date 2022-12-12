import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdatePasswordDto {
    @ApiProperty()
    password: string;
}