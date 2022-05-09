import express from "express";
import { router } from "./routes";
import cors from "cors";
import "reflect-metadata";
import "dotenv/config";
import "./db/dataSource";
import "express-async-errors";


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`server is run on PORT ${process.env.PORT}`);
});
