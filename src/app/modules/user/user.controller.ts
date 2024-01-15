import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";
import { IUser } from "./user.interface";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<IUser[]> => {
  const user = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
  return user;
};
