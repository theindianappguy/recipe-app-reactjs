import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeRawDto {
  @ApiProperty()
  recipe_id: number;

  @ApiProperty()
  raw_material_id: number;

  @ApiProperty()
  amount: number;
}
