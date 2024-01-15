import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

// built-in instance static method------------------------------------->
type UserModel = Model<IUser, {}, IUserMethods>;

// -----------------------------------------------------------//

export const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  dataOfBirth: { type: String },
  gender: { type: String, required: true },
  email: { type: String },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

// built-in instance static method-------------------------------------------->
userSchema.method("fullName", function fullName() {
  return this.name.firstName + "" + this.name.lastName;
});

// -----------------------------------------------------------------//
// model------------------------------------------>
const User = model<IUser, UserModel>("User", userSchema); //instance static method=>{UserModel}

export default User;
