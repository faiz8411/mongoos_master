import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address: { type: String, required: true },
  email: { type: String, required: true },
});
// res.send("Hello mongoose");
// next();
userSchema.static("getAdminUsers", async function getAdminUsers(name: string) {
  const admins = await this.find({ role: "admin" });
  return admins;
});
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});
const User = model<IUser, UserModel>("User", userSchema);
export default User;
