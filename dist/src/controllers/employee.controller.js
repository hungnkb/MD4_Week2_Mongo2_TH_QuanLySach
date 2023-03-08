"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeController {
    constructor() {
        this.home = (req, res) => {
            res.render('employee');
        };
    }
}
exports.default = new EmployeeController();
//# sourceMappingURL=employee.controller.js.map