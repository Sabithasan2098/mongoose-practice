import { IUser } from "./user.interface";
import User from "./user.model&schema";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  console.log(user);
  console.log(user.fullName()); //custom instance static method
  return user;
};

export const getUsersFromDB = async () => {
  const findAllUser = await User.find();
  return findAllUser;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const findUser = await User.findOne({ id: payload });
  return findUser;
};

// static method---------------------------->
export const getAdminUserDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
