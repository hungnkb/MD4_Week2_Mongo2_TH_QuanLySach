import mongoose from "mongoose";
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
declare const Employee: mongoose.Model<IEmployee, {}, {}, {}, any>;
export default Employee;
