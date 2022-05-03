import { AppDataSource } from "../../db/dataSource";
import { User } from "../../model/entities/User";
import { IUserRequest } from "../../interfaces";

const userRepo = AppDataSource.getRepository(User);

export const findAllUser = async (): Promise<User[]> => {
  return await userRepo.find();
};

export const findOneUser = async (idUser: string): Promise<User> => {
  return await userRepo.findOneBy(idUser);
};

export const createUser = async (User: IUserRequest): Promise<User> => {
  return await userRepo.create(users);
};

export const updateUser = async (idUser: string): Promise<User> => {
  const usersUpdate = await userRepo.findOneBy(idUser);
  return await userRepo.remove(usersUpdate);
};

export const removeUser = async (idUser: string): Promise<User> => {
  const usersRemove = await userRepo.findOneBy(idUser);
  return await userRepo.save(usersRemove);
};
