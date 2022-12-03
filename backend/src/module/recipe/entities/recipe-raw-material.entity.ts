import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RawMaterial } from "./raw-material.entity";
import { Recipe } from "./recipe.entity";

@Entity({name:'recipe_raw_material'})
export class RecipeRawMaterial {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    recipe_id: number;
  
    @Column()
    raw_material_id: number;
  
    @Column()
    amount: number;
  
   @ManyToOne(() => Recipe)
    @JoinColumn({ name: 'recipe_id', referencedColumnName: 'id' })
  recipe: Recipe;

    @ManyToOne(()=>RawMaterial)
    @JoinColumn({name:'raw_material_id',referencedColumnName:'id'})
    rawmaterial:RawMaterial;
}
