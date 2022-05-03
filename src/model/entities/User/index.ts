import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Recipes from "../Recipes";
import Expenses from "../Expenses";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("character varying")
  name: string;

  @Column("character varying")
  email: string;

  @Column("character varying")
  password: string;

  @Column("integer")
  cod_recipes: number;

  @Column("integer")
  cod_expenses: number;

  @ManyToOne(() => Recipes, (recipe) => recipe.User, {
    cascade: true,
    eager: true,
  })
  
  @JoinColumn({ name: "cod_recipes" })
  recipes: Recipes;

  @ManyToOne(() => Expenses, (expense) => expense.User, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: "cod_expenses" })
  expenses: Expenses;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", onUpdate: "CURRENT_TIMESTAMP", nullable: true })
  updatedAt: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default { User };
