import mongoose from "mongoose";
import app from "./app";

const port: Number = 5000;

// database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("successful to connect database");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("failed to connect");
  }
}
main();
