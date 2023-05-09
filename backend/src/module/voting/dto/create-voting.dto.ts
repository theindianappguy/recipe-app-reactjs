import { ApiProperty } from "@nestjs/swagger";

export class CreateVotingDto {
    @ApiProperty()
    recipe_id:number;

    @ApiProperty()
    user_id:number;
    @ApiProperty()
    amount_star:number;
}
