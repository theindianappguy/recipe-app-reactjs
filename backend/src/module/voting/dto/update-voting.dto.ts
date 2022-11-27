import { PartialType } from '@nestjs/swagger';
import { CreateVotingDto } from './create-voting.dto';

export class UpdateVotingDto extends PartialType(CreateVotingDto) {}
