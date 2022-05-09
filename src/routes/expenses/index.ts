import { Router } from "express";
import {
  findAllExpensesController,
  findOneExpensesController,
} from "../../controller/expenses";

const expenseRoutes = Router();

expenseRoutes.get("/", findAllExpensesController);
expenseRoutes.get("/:id", findOneExpensesController);

export { expenseRoutes };
