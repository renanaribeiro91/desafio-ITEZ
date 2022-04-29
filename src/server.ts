import express from "express";
import "dotenv/config";
import { routes } from "./routes";
import cors from "cors";
import "./db/connect";
// import 'express-async-errors'

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`server is run on PORT ${process.env.PORT}`);
});

export { app };
