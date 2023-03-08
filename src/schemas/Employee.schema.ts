import mongoose, { Schema, model } from "mongoose";

interface IEmployee {
  name: string;
  code: string;
  age: number;
  Branch: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "Branch";
  };
  salary: number;
}

let employeeSchema = new Schema<IEmployee>({
  name: String,
  code: String,
  age: Number,
  Branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
  },
  salary: Number,
});

const Employee = model<IEmployee>('Employee', employeeSchema);

export default Employee ;
