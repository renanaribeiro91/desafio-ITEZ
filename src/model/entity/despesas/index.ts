import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Categories } from "../../interfaces";

@Entity("Despesas")
export class Despesas {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_despesas: number;

  @Column("character varying", { length: 45 })
  desc_despesas: string;

  @Column("text")
  categories: Categories;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default { Despesas };
