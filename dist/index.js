"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./src/routers"));
const passport_1 = __importDefault(require("passport"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const database_1 = __importDefault(require("./src/configs/database"));
const app = (0, express_1.default)();
database_1.default.connect();
dotenv_1.default.config();
let PORT = process.env.PORT;
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(passport_1.default.initialize());
dotenv_1.default.config();
app.use((0, cookie_parser_1.default)(process.env.USER_CODE_SECRET));
(0, routers_1.default)(app);
app.listen(PORT, () => {
    console.log('Server is running at ' + PORT);
});
//# sourceMappingURL=index.js.map