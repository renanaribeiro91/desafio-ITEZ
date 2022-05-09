import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Categories } from "../../../interfaces";
import { v4 as uuid } from "uuid";
import User from "../User";

@Entity("expenses")
export class Expenses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_expenses: number;

  // @Column("character varying", { length: 45 })
  // desc_despesas: string;

  @Column("text")
  categories: Categories;

  @OneToMany(() => User, (users) => users.expenses)
  user: User[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", onUpdate: "CURRENT_TIMESTAMP", nullable: true })
  updatedAt: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default { Expenses };
