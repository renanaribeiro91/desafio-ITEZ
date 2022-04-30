import "reflect-metadata"
import { DataSource } from "typeorm"
import "dotenv/config";

export const AppDataSource = new DataSource({
 type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port:process.env.TYPEORM_PORT,
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
    suscribersDir: "src/suscriber/**"
})

