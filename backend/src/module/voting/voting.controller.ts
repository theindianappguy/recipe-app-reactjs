import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotingService } from './voting.service';
import { CreateVotingDto } from './dto/create-voting.dto';
import { UpdateVotingDto } from './dto/update-voting.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/public.decorator';
@ApiBearerAuth()
@ApiTags('Voting')
@Controller('voting')
export class VotingController {
  constructor(private readonly votingService: VotingService) {}
  @Public()
  @Post()
  create(@Body() createVotingDto: CreateVotingDto) {
    return this.votingService.create(createVotingDto);
  }
  @Public()
  @Get(':id')
  getStars(@Param('id') id:number) {
    return this.votingService.getStars(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.votingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVotingDto: UpdateVotingDto) {
  //   return this.votingService.update(+id, updateVotingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.votingService.remove(+id);
  // }
}
