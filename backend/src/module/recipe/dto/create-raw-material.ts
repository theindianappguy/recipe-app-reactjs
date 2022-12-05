import { ApiProperty } from '@nestjs/swagger';

export class CreateRawMaterial {
  @ApiProperty()
  name: string;

  @ApiProperty()
  unit: string;
}
