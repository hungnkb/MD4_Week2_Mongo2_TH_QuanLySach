"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = __importDefault(require("../controllers/home.controller"));
const express_1 = __importDefault(require("express"));
const homeRouter = express_1.default.Router();
homeRouter.get("/", home_controller_1.default.showHome);
exports.default = homeRouter;
//# sourceMappingURL=home.router.js.map