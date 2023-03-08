import mongoose from "mongoose";

let database = {
  connect: () => {
    mongoose.set("strictQuery", true);
    mongoose
      .connect("mongodb://127.0.0.1:27017/MD4_Final")
      .then(() => console.log("DB Connected!"))
      .catch((error) => console.log("DB Connected Fail! " + error));
  },
};
export default database;
