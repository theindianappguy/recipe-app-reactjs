import { Module } from '@nestjs/common';
import { VotingService } from './voting.service';
import { VotingController } from './voting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voting } from './entities/voting.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Voting])],
  controllers: [VotingController],
  providers: [VotingService]
})
export class VotingModule {}
