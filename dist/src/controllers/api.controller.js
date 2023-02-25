"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_model_1 = require("../schemas/User.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class apiController {
    constructor() {
        this.register = async (req, res) => {
            try {
                let { username, password } = req.body;
                const salt = await bcrypt_1.default.genSaltSync(10);
                password = await bcrypt_1.default.hashSync(password, salt);
                let newUser = new User_model_1.User({ username, password });
                await newUser.save();
                res.status(200).json({ message: 'Register success' });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.login = async (req, res, next) => {
            let { username, password } = req.body;
            let user = await User_model_1.User.findOne({ username: username });
            if (user) {
                bcrypt_1.default.compare(password, user.password, (err, result) => {
                    if (result) {
                        let token = jsonwebtoken_1.default.sign({
                            iss: 'Book Store',
                            sub: user.id,
                            iat: new Date().getTime()
                        }, process.env.USER_CODE_SECRET, { expiresIn: 60 });
                        res.cookie('authorization', 'Bearer ' + token, { signed: true });
                        res.status(200).json({ message: 'Login success', user, token });
                    }
                    else {
                        res.status(400).json({ message: 'wrong password' });
                    }
                });
            }
        };
    }
}
exports.default = new apiController();
//# sourceMappingURL=api.controller.js.map