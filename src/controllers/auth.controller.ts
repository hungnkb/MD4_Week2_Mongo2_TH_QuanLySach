import { Request, Response } from "express";
import passport from "passport";

class authController {
  showLogin = async (req: Request, res: Response) => {
    res.render("login");
  };

  showRegister = async (req: Request, res: Response) => {
    res.render("register");
  };

  loginOverGoogle = async (req: Request, res: Response) => {
    res.render('home');
  };
}

export default new authController();
