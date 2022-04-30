import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("character varying")
  name: string;

  @Column("character varying")
  email: string;

  @Column("character varying")
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default { User };
