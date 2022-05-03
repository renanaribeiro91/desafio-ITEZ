import { AppDataSource } from "../../db/dataSource";
import { Recipes } from "../../model/entities/Recipes";
import { IRecipesRequest } from "../../interfaces";

const RecipesRepo = AppDataSource.getRepository(Recipes);

export const findAllRecipes = async (): Promise<Recipes[]> => {
  return await RecipesRepo.find();
};

export const findOneRecipes = async (idRecipes: string): Promise<Recipes> => {
  return await RecipesRepo.findOneBy(idRecipes);
};

export const createRecipes = async (Recipes: IRecipesRequest): Promise<Recipes> => {
  return await RecipesRepo.create(Recipes);
};

export const updateRecipes = async (idRecipes: string): Promise<Recipes> => {
  const RecipesUpdate = await RecipesRepo.findOne(idRecipes);
  return await RecipesRepo.remove(RecipesUpdate);
};

export const removeRecipes = async (idRecipes: string): Promise<Recipes> => {
  const RecipesRemove = await RecipesRepo.findOne(idRecipes);
  return await RecipesRepo.save(RecipesRemove);
};
