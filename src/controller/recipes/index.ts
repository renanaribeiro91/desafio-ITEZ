import { Request, Response } from "express";
import { findAllRecipes, findOneRecipes } from "../../repository/recipes/";

const findAllRecipesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const recipes = await findAllRecipes();
    return res.status(200).send(recipes);
  } catch (err) {
    return err;
  }
};

const findOneRecipesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { _id } = req.params;
  try {
    const recipes = await findOneRecipes(_id);
    return res.status(200).send(recipes);
  } catch (err) {
    return err;
  }
};

export { findAllRecipesController, findOneRecipesController };
