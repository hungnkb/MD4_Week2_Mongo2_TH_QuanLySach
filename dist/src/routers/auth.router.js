"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
authRouter.get("/login", auth_controller_1.default.showLogin);
authRouter.get("/register", auth_controller_1.default.showRegister);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map