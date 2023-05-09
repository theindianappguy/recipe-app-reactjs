import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVotingDto } from './dto/create-voting.dto';
import { UpdateVotingDto } from './dto/update-voting.dto';
import { Voting } from './entities/voting.entity';

@Injectable()
export class VotingService {
  constructor(
  @InjectRepository(Voting)
  private readonly votingRepo:Repository<Voting>,
  ){}
  create(createVotingDto: CreateVotingDto) {
    return this.votingRepo.save(createVotingDto)
  }

  async getStars(id:number) {
    const playlist = this.votingRepo.createQueryBuilder("voting")
    playlist.where("voting.recipe_id = :id", { id })
    playlist.select("AVG(voting.amount_star)",'avg')
    const data= await playlist.getRawOne()
    return data;
    // return this.votingRepo.findOne({where:{id:id}});
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
