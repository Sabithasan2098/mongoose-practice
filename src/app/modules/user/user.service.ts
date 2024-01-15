import User from "./user.model&schema";

export const createUserToDB = async () => {
  const user = await new User({
    id: "007",
    role: "secret officer",
    password: "bond007",
    name: {
      firstName: "james",
      middleName: "bond",
      lastName: "007",
    },
    dataOfBirth: "27-03-2002",
    gender: "male",
    email: "www.james@bond.com",
    contactNumber: "0176546546546",
    emergencyContactNumber: "01935465465465",
    presentAddress: "nalta",
    permanentAddress: "nalta",
  });
  await user.save();
  console.log(user);
};
