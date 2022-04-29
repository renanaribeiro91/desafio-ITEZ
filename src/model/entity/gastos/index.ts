import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./payment";

@Entity("Gastos")
export class Gastos {
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
}

export default { Gastos };
