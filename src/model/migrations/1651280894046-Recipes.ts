import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Recipes1651280894046 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "receitas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "cod_receita",
            type: "serial",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "desc_receita",
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
    await queryRunner.dropTable("receitas");
  }
}
