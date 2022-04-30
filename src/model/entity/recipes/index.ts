import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("receitas")
class Recipes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_receitas: number;

  @Column("character varying", { length: 45 })
  desc_receitas: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipes;
