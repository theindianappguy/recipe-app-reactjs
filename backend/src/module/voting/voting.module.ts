import { Module } from '@nestjs/common';
import { VotingService } from './voting.service';
import { VotingController } from './voting.controller';

@Module({
  controllers: [VotingController],
  providers: [VotingService]
})
export class VotingModule {}
