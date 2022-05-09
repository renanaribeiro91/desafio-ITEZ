import { Request, Response } from "express";
import {
  createUser,
  findAllUser,
  findOneUser,
  removeUser,
  updateUser,
} from "../../repository/user/";
import jwt from "jsonwebtoken";

const findAllUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await findAllUser();
    if (!user) {
      res.status(401).json({ message: "Não existe usuario cadastros" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error });
  }
};

const findOneUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { _id } = req.params;
  try {
    const user = await findOneUser(_id);
    if (!user) res.status(401).json({ message: "Nenhum usuario encontrado" });
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).json({ error });
  }
};

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id, name, email, password, cod_recipes, cod_expenses } = req.body;
  const userBody = { id, name, email, password, cod_recipes, cod_expenses };
  console.log(userBody);
  try {
    const user = await createUser(userBody);
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(error);
  }
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await findOneUser({ id });
    if (!user) {
      res.status(401).json({ message: "Nenhum usuario encontrado" });
    } else {
      await updateUser({ id }, { ...body });
      res.status(200).send("Usuário Atualizado com sucesso");
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const removeUserController = async (req, res) => {
  const { id } = req.params;
  const user = await findOneUser({ id });
  if (!user) {
    res.status(401).json({ message: "Usuario não encontrado" });
  } else {
    await removeUser({ id });
    res.status(200).json({ ok: true });
  }
};

export {
  findAllUserController,
  findOneUserController,
  createUserController,
  updateUserController,
  removeUserController,
};
