import { createConnection } from "typeorm";
import AppDataSource from "./dataSource";

AppDataSource.initialize()
  .then(async () => {
    await createConnection();
    console.log("connected");
  })
  .catch((error) => console.log(error));
