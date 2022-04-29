import "reflect-metadata";
import { Connection, createConnection } from "typeorm";

export const dbConnect = async (): Promise<Connection> => {
  try {
    await createConnection();
    console.log("connect");
  } catch (err) {
    console.log("Error while connecting to the database", err);
    return err;
  }
};