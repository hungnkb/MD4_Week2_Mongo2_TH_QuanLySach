"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const express_1 = __importDefault(require("express"));
const bookRouter = express_1.default.Router();
bookRouter.get('/create', book_controller_1.default.showCreate);
bookRouter.post('/create', book_controller_1.default.createBook);
exports.default = bookRouter;
//# sourceMappingURL=book.router.js.map