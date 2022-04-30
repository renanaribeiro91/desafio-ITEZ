import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("Despesas")
export class Despesas {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_despesas: number;

  @Column("character varying", { length: 45 })
  desc_despesas: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default { Despesas };
