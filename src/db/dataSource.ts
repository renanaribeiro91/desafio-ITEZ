import { DataSource, createConnection } from "typeorm";
import { User, Recipes, Expenses } from "../model/entities";
import "dotenv/config";
const entities = { User, Recipes, Expenses };

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: [entities],
  migrations: ["src/model/migrations/**.{ts,js}"],
});

AppDataSource.initialize()
  .then(async () => {
    await createConnection();
    console.log("connected");
  })
  .catch((error) => console.log(error));
