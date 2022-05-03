import { AppDataSource } from "../../db/dataSource";
import { Expenses } from "../../model/entities/Expenses";
import { IExpensesRequest } from "../../interfaces";

const ExpensesRepo = AppDataSource.getRepository(Expenses);

export const findAllExpenses = async (): Promise<Expenses[]> => {
  return await ExpensesRepo.find();
};

export const findOneExpenses = async (idExpenses: string): Promise<Expenses> => {
  return await ExpensesRepo.findOneBy(idExpenses);
};

export const createExpenses = async (Expenses: IExpensesRequest): Promise<Expenses> => {
  return await ExpensesRepo.create(Expensess);
};

export const updateExpenses = async (idExpenses: string): Promise<Expenses> => {
  const ExpensessUpdate = await ExpensesRepo.findOne(idExpenses);
  return await ExpensesRepo.remove(ExpensessUpdate);
};

export const removeExpenses = async (idExpenses: string): Promise<Expenses> => {
  const ExpensessRemove = await ExpensesRepo.findOne(idExpenses);
  return await ExpensesRepo.save(ExpensessRemove);
};
