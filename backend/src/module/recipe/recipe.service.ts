import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, QueryBuilder, Repository } from 'typeorm';
import { CreateRawMaterial } from './dto/create-raw-material';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { CreateRecipeRawDto } from './dto/recipe-raw-material.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RawMaterial } from './entities/raw-material.entity';
import { RecipeRawMaterial } from './entities/recipe-raw-material.entity';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepo:Repository<Recipe>,
    @InjectRepository(RawMaterial)
    private readonly rawMaterialRepo:Repository<RawMaterial>,
    @InjectRepository(RecipeRawMaterial)
    private readonly recipeRawMaterialRepo:Repository<RecipeRawMaterial>,

  ){}
  create(createRecipeDto: CreateRecipeDto) {
    return this.recipeRepo.save(createRecipeDto);
  }
  createRawMaterial(createRawMaterial: CreateRawMaterial) {
    return this.rawMaterialRepo.save(createRawMaterial);
  }
  createRecipeMaterial(createRecipeRawDto: CreateRecipeRawDto[]) {
    return this.recipeRawMaterialRepo.save(createRecipeRawDto);
  }
  search(name: string){
    console.log('abc',name)
    return this.recipeRepo.find({where:{ name: name }});
  }
  async saveRecipe(id: number,userId:number){
    const recipe=await this.recipeRepo.findOne({where:{ id: id }});
    if(recipe.creator===1)
    { 
      recipe.creator=userId;
    }
    return this.recipeRepo.save(recipe);
  }
  async filter(id:number) {
    const queryBuilder = this.rawMaterialRepo.createQueryBuilder('raw_material');
    queryBuilder.leftJoinAndSelect(`raw_material.listRecipe`, `recipe_raw_material`);
    queryBuilder.where(`raw_material.id = :id`, { id: id });
    const data= await queryBuilder.getOne();
    const proposalReview = await this.findByIds(
      data.listRecipe.map((e) => e.recipe_id),
    );
    return proposalReview;
  }

  async findByIds(id: number[]) {
    return await this.recipeRepo.find({
      where: {
        id: In(id),
      },
    });
  }
async findOne(id: number) {
    const recipe=await  this.recipeRepo.findOne({
      where: {
        id: id,
      },
    });
  const queryBuilder = this.recipeRawMaterialRepo.createQueryBuilder('recipe_raw_material');
  queryBuilder.leftJoinAndSelect(`recipe_raw_material.rawmaterial`, `raw_material`);
  queryBuilder.where(`recipe_raw_material.recipe_id = :id`, { id:recipe.id  });
  const material=await queryBuilder.getRawMany();
  console.log('a',queryBuilder.getQuery())
  console.log('ahihi',material)
  return [recipe,material];

  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
