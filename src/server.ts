import "dotenv/config";
import express from "express";
// import { router } from './routes/router'

const app = express();

const port = 8080;
app.listen(port, () => {
  console.log("server listening on port 8080");
});
