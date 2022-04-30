import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("receitas")
class Recipes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_receita: number;

  @Column("character varying", { length: 45 })
  desc_receita: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipes;
