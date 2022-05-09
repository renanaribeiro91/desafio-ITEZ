import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Recipes1651280894046 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "recipes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "cod_recipes",
            type: "serial",
            generationStrategy: "increment",
          },
          {
            name: "desc_recipes",
            type: "varchar",
            length: "45",
            isNullable: false,
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
    await queryRunner.dropTable("recipes");
  }
}
