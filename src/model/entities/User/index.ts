import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Recipes from "../Recipes";
import Expenses from "../Expenses";

@Entity("user")
export class Users {
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

  // @ManyToOne(() => Recipes, (recipe) => recipe.user)
  // recipes: Recipes;
  @ManyToOne(() => Recipes, (recipe) => recipe.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: "cod_recipes" })
  recipes: Recipes;

  // @ManyToOne(() => Expenses, (expense) => expense.user)
  // expenses: Expenses;
  @ManyToOne(() => Expenses, (expense) => expense.user, {
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

export default { Users };
