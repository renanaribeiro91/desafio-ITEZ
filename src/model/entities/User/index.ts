import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Recipes from './Recipes';
import Expenses from './Expenses';

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
  cod_receita: number;

  @Column("integer")
  cod_despesa: number;

  @ManyToOne(() => Recipes, (recipe) => recipe.User, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: "cod_receita" })
  receitas: Recipes;

  @ManyToOne(() => Expenses, (expense) => expense.User, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: "cod_despesa" })
  despesas: Expenses;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default { User };
