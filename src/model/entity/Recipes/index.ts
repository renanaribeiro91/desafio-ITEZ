import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import User from "../User";

@Entity("receitas")
class Recipes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_receitas: number;

  @Column("character varying", { length: 45 })
  desc_receitas: string;

  @OneToMany(() => User, (moviment) => moviment.receitas)
  User: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Recipes;
