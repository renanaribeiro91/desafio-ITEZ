import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./payment";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("character varying")
  email: string;

  @Column("character varying")
  password: string;

  @Column("character varying")
  statusCadastro: string;
}

export default { User };
