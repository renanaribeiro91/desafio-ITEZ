import { Router } from "express";
import {
  findAllRecipesController,
  findOneRecipesController,
} from "../../controller/recipes";

const recipesRoutes = Router();

recipesRoutes.get("/", findAllRecipesController);
recipesRoutes.get("/:id", findOneRecipesController);

export { recipesRoutes };
