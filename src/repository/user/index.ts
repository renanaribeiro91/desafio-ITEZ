import { AppDataSource } from "../../db/dataSource.ts";
import { Users } from "../../model/entities/";
import { IUserRequest } from "../../interfaces";

const userRepo = AppDataSource.getRepository(Users);

export const findAllUser = async (): Promise<Users[]> => {
  return await userRepo.find();
};

export const findOneUser = async (idUser): Promise<Users> => {
  return await userRepo.findOneBy(idUser);
};

export const createUser = async (users: IUserRequest): Promise<Users> => {
  return await userRepo.create(users);
};

export const updateUser = async (idUser, body): Promise<Users> => {
  return await userRepo.save(idUser, body);
};

export const removeUser = async (idUser): Promise<Users> => {
  const usersRemove = await userRepo.remove(idUser);
  return await userRepo.save(usersRemove);
};
