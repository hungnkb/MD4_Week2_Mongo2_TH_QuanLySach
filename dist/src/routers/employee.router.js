"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_controller_1 = __importDefault(require("../controllers/employee.controller"));
let employeeRouter = express_1.default.Router();
employeeRouter.get('/', employee_controller_1.default.home);
exports.default = employeeRouter;
//# sourceMappingURL=employee.router.js.map