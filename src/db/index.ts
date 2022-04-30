import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { AppDataSource } from "./dataSource";
import "dotenv/config";

AppDataSource.initialize()
  .then(async (): Promise<Connection> => {
    await createConnection();
    console.log("connected");
  })
  .catch((error) => console.log(error));
