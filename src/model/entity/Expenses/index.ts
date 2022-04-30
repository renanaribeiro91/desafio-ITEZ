import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Categories } from "../../interfaces";
import { v4 as uuid } from "uuid";
import User from "../User";

@Entity("Despesas")
export class Expenses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_despesas: number;

  // @Column("character varying", { length: 45 })
  // desc_despesas: string;

  @Column("text")
  categories: Categories;

  @OneToMany(() => User, (moviment) => moviment.despesas)
  User: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default { Expenses };
