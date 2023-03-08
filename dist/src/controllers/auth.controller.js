"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class authController {
    constructor() {
        this.showLogin = async (req, res) => {
            res.render("login");
        };
        this.showRegister = async (req, res) => {
            res.render("register");
        };
        this.loginOverGoogle = async (req, res) => {
            console.log(req);
        };
    }
}
exports.default = new authController();
//# sourceMappingURL=auth.controller.js.map