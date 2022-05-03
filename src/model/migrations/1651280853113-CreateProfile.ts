import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfile1651280853113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            
          },
          {
            name: "name",
            type: "varchar(200)",
          },
          {
            name: "email",
            type: "varchar(200)",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar(200)",
          },
          {
            name: "created_at",
            type: "timestamp",
         
          },
          {
            name: "updated_at",
            type: "timestamp",
         
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profiles");
  }
}
