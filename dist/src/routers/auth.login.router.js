"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const authLoginRouter = express_1.default.Router();
authLoginRouter.get('/', auth_controller_1.default.showLogin);
authLoginRouter.get('/google', auth_controller_1.default.loginOverGoogle);
exports.default = authLoginRouter;
//# sourceMappingURL=auth.login.router.js.map