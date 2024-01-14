import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // interface------------------------------------->
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dataOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNumber: string;
    emergencyContactNumber: string;
    presentAddress: string;
    permanentAddress: string;
  }
  // schema---------------------------------------->
  const userSchema = new Schema<IUser>({
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
  // model------------------------------------------>
  const User = model<IUser>("User", userSchema);
  const createUserToDB = async () => {
    const user = new User({
      id: "005",
      role: "next-level",
      password: "bond007",
      name: {
        firstName: "mr",
        middleName: "john",
        lastName: "doe",
      },
      dataOfBirth: "27-03-2002",
      gender: "male",
      email: "www.john@doe.com",
      contactNumber: "0176546546546",
      emergencyContactNumber: "01935465465465",
      presentAddress: "nalta",
      permanentAddress: "nalta",
    });
    await user.save();
    console.log(user);
    res.send(user);
  };
  createUserToDB();
});

export default app;
