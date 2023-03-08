"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_schema_1 = __importDefault(require("../../schemas/Employee.schema"));
class EmployeeAPI {
    constructor() {
        this.addEmployee = async (req, res) => {
            let { code, name, age, salary, branch } = req.body;
            try {
                let newEmployee = await Employee_schema_1.default.create({
                    code,
                    name,
                    age,
                    salary,
                    branch,
                });
                if (newEmployee) {
                    res.status(200).json("Create Success");
                }
                else {
                    res.status(200).json("Create Fail");
                }
            }
            catch (err) {
                console.log(err);
            }
        };
        this.get = async (req, res) => {
            let employee = Employee_schema_1.default.find()
                .populate("Branch")
                .exec((err, employee) => {
                console.log(employee);
            });
            res.status(200).json({ message: "Create Success", employee });
        };
    }
}
exports.default = new EmployeeAPI();
//# sourceMappingURL=employee.api.controller.js.map