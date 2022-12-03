import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RecipeRawMaterial } from "./recipe-raw-material.entity";

@Entity({name:'raw_material'})
export class RawMaterial {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    unit: string;
  @OneToMany(() => RecipeRawMaterial, (listRecipe) => listRecipe.rawmaterial)
  listRecipe: RecipeRawMaterial[];
}
