import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

async function mongooseMain() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("data base connect successful");
    app.listen(port, () => {
      console.log(`server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`failed to data connect`, err);
  }
}
mongooseMain().catch((err) => console.log(err));
