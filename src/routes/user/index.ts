import { Router } from "express";
import { createUserController } from "../../controller/user/";

const userRoutes = Router();

userRoutes.post("/", createUserController);

export { userRoutes };
