"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const branch_api_controller_1 = __importDefault(require("../../controllers/api/branch.api.controller"));
const employee_api_controller_1 = __importDefault(require("../../controllers/api/employee.api.controller"));
const apiRouter = express_1.default.Router();
apiRouter.get('/branch', branch_api_controller_1.default.get);
apiRouter.post('/employee', employee_api_controller_1.default.addEmployee);
apiRouter.get('/employee', employee_api_controller_1.default.get);
exports.default = apiRouter;
//# sourceMappingURL=api.router.js.map