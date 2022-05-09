import { Router } from "express";
import { userRoutes } from "./user/";
import { expenseRoutes } from "./expenses/";
import { recipesRoutes } from "./recipes/";

const router = Router();

router.use("/user", userRoutes);
router.use("/expenses", expenseRoutes);
router.use("/recipes", recipesRoutes);

export { router };
