import { Injectable } from '@nestjs/common';
import { CreateVotingDto } from './dto/create-voting.dto';
import { UpdateVotingDto } from './dto/update-voting.dto';

@Injectable()
export class VotingService {
  create(createVotingDto: CreateVotingDto) {
    return 'This action adds a new voting';
  }

  findAll() {
    return `This action returns all voting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voting`;
  }

  update(id: number, updateVotingDto: UpdateVotingDto) {
    return `This action updates a #${id} voting`;
  }

  remove(id: number) {
    return `This action removes a #${id} voting`;
  }
}
