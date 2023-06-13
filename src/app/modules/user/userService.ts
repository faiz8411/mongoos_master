import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  console.log(user.fullName());
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { email: 1 });
  return user;
};
export const getAdminUserFromDb = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
