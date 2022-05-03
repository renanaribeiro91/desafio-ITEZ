import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import User from "../User";

@Entity("Recipes")
class Recipes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryGeneratedColumn("increment")
  cod_recipes: number;

  @Column("character varying", { length: 45 })
  desc_recipes: string;

  @OneToMany(() => User, (user) => user.Recipes)
  @JoinColumn({ name: "User" })
  user: User[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", onUpdate: "CURRENT_TIMESTAMP", nullable: true })
  updatedAt: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Recipes;
