import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfile1651280853113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "profiles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar(200)",
          },
          {
            name: "email",
            type: "varchar(200)",
          },
          {
            name: "password",
            type: "varchar(200)",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profiles");
  }
}
