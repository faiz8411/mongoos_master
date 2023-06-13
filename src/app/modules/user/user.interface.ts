import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: string;
  email: string;
  address: string;
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
}

// instance methods
export interface IUserMethods {
  fullName(): string;
}

// static
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
