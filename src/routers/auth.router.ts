import authController from "../controllers/auth.controller";
import express from 'express';


const authRouter = express.Router();

authRouter.get('/login', authController.showLogin);
authRouter.get('/login/google', authController.loginOverGoogle)


authRouter.get('/register', authController.showRegister);

export default authRouter;