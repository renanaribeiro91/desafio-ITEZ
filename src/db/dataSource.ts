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
  entities: ["dist/**/*.entities.js"],
  migrations: ["src/model/migrations/**.{ts,js}"],
  // subscribers: "src/subscriber/**.{ts,js}",
  // cli: {
  //   entitiesDir: "/model/entity/**"],
  //   migrationDir: "/model/migrations/**"],
  //   suscribersDir: "/suscriber/**"],
  // },
});

export default AppDataSource;
