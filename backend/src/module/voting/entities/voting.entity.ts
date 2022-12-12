import { Recipe } from '../../recipe/entities/recipe.entity';
import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'voting' })
export class Voting {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    recipe_id: number;
    @Column()
    user_id: number;
    @Column()
    amount_star: number;
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User;
    @ManyToOne(() => Recipe)
    @JoinColumn({ name: 'recipe_id', referencedColumnName: 'id' })
    recipe: Recipe;
}
