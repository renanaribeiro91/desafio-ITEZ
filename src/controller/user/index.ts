import { Request, Response } from "express";
import {
  createUser,
  findAllUser,
  findOneUser,
  removeUser,
  updateUser,
} from "../../repository/user/";
import jwt from "jsonwebtoken";

const testeToken = jwt.sign("", "secret", { expiresIn: "1d" });

const findAllUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await findAllUser();
    return res.status(200).send(user);
  } catch (err) {
    return err;
  }
};

const findOneUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { _id } = req.params;
  try {
    const user = await findOneUser(_id);
    return res.status(200).send(user);
  } catch (err) {
    return err;
  }
};

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id, name, password, email, cod_receitas, cod_despesas } = req.body;
  try {
    const emails = req.body.email == email;
    if (emails) {
      return "This email already exists";
    } else {
      const user = await createUser(req.body);
      return res.status(200).send("User create");
    }
  } catch (err) {
    return err;
  }
};

const authUser = async (req: Request, res: Response): Promise<Response> => {
  const { _id } = req.params;
  const usersAuth = await userRepo.findOneUser(_id);
  if (!usersAuth) {
    return res.status(400).send({ message: "User not founded" });
  }
  return await userRepo.remove(usersUpdate);
};

export {
  findAllUserController,
  findOneUserController,
  createUserController,
  authUser,
};
