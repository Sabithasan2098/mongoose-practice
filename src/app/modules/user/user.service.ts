import { IUser } from "./user.interface";
import User from "./user.model&schema";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  console.log(user);
  return user;
};

export const getUsersFromDB = async () => {
  const findAllUser = await User.find();
  return findAllUser;
};
