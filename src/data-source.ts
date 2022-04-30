import "reflect-metadata";
import { DataSource, createConnection } from "typeorm";
import "dotenv/config";
import { User } from "./src/model/entity";

export const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["dist/**/*.entity.js"],
  migrations: ["src/model/migrations/**/*.{ts, js}"],
  suscribers: ["src/suscriber/**/*.{ts, js}"],
  cli: {
    entitiesDir: "src/model/entity/**",
    migrationDir: "src/model/migrations/**",
    suscribersDir: "src/suscriber/**",
  },
});

AppDataSource.initialize()
  .then(async () => {
    await createConnection();
    console.log("connected");
  })
  .catch((error) => console.log(error));
