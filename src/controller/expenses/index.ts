import { Request, Response } from "express";
import { findAllExpenses, findOneExpenses } from "../../repository/expenses/";

const findAllExpensesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const expenses = await findAllExpenses();
    return res.status(200).send(expenses);
  } catch (err) {
    return err;
  }
};

const findOneExpensesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { _id } = req.params;
  try {
    const expenses = await findOneExpenses(_id);
    return res.status(200).send(expenses);
  } catch (err) {
    return err;
  }
};

export { findAllExpensesController, findOneExpensesController };
