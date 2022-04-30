import "reflect-metadata";
import { DataSource, createConnection, Connection } from "typeorm";
import "dotenv/config";

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
  migrations: [__dirname + "/model/migrations/**/*.{ts,js}"],
  subscribers: [__dirname + "/subscriber/**/*.{ts,js}"],
  cli: {
    entitiesDir: "src/model/entity/**",
    migrationDir: "src/model/migrations/**",
    suscribersDir: "src/suscriber/**",
  },
});

AppDataSource.initialize()
  .then(async (): Promise<Connection> => {
    await createConnection();
    console.log("connected");
  })
  .catch((error) => console.log(error));
