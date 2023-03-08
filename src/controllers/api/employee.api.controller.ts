import { Request, Response } from "express";
import Employee from "../../schemas/Employee.schema";
import Branch from "../../schemas/Branch.schema";

class EmployeeAPI {
  addEmployee = async (req: Request, res: Response) => {
    let { code, name, age, salary, branch } = req.body;
    try {
      let newEmployee = await Employee.create({
        code,
        name,
        age,
        salary,
        branch,
      });
      if (newEmployee) {
        res.status(200).json("Create Success");
      } else {
        res.status(200).json("Create Fail");
      }
    } catch (err) {
      console.log(err);
    }
  };

  get = async (req: Request, res: Response) => {
    let employee = Employee.find()
      .populate("Branch")
      .exec((err, employee) => {
        console.log(employee);
      });
    res.status(200).json({ message: "Create Success", employee });
  };
}

export default new EmployeeAPI();
