import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["dist/**/*.entity.js"],
  migrations: [__dirname + "/model/migrations/**/*.{ts,js}"],
  subscribers: [__dirname + "/subscriber/**/*.{ts,js}"],
  // cli: {
  //   entitiesDir: "src/model/entity/**",
  //   migrationDir: [__dirname + "/model/migrations/**"],
  //   suscribersDir: [__dirname + "/suscriber/**"],
  // },
});

export default AppDataSource;
