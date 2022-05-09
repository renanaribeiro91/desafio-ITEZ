import { Router } from "express";
import {
  findAllUserController,
  findOneUserController,
  createUserController,
  updateUserController,
  removeUserController,
} from "../../controller/user/";

const userRoutes = Router();

userRoutes.get("/:id", findOneUserController);
userRoutes.get("/", findAllUserController);
userRoutes.post("/", createUserController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/user/:id", removeUserController);

export { userRoutes };
