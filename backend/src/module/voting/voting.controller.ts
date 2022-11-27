import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotingService } from './voting.service';
import { CreateVotingDto } from './dto/create-voting.dto';
import { UpdateVotingDto } from './dto/update-voting.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Voting')
@Controller('voting')
export class VotingController {
  constructor(private readonly votingService: VotingService) {}

  // @Post()
  // create(@Body() createVotingDto: CreateVotingDto) {
  //   return this.votingService.create(createVotingDto);
  // }

  // @Get()
  // findAll() {
  //   return this.votingService.findAll();
  // }

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
