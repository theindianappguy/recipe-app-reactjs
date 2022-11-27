import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/public.decorator';
@ApiTags('Recipe')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  @Public()
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  // @Get()
  // findAll() {
  //   return this.recipeService.findAll();
  // }
  @Public()
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.recipeService.search(name);
  }
  // @Get(':id')
  // search(@Param('id') id: string) {
  //   return this.recipeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
  //   return this.recipeService.update(+id, updateRecipeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.recipeService.remove(+id);
  // }
}
