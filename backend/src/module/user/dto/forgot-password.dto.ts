import { ApiProperty } from '@nestjs/swagger';

export class ForgotPassword {
    @ApiProperty()
    email: string;

    @ApiProperty()
    qid: number;

    @ApiProperty()
    answer: string;
}