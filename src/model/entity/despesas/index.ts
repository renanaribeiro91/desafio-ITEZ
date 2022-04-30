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

  @Column("character varying")
  Entretenimento: string;

  @Column("character varying")
  Alimentação: string;

  @Column("character varying")
  Educação: string;

  @Column("character varying")
  Saúde: string;

  @Column("character varying")
  Transporte: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default { Despesas };
