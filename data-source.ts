import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
 type: "postgres",
  host: "172.20.0.1",
  port: 5432,
  username: "root",
  password: "root",
  database: "itez",
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

