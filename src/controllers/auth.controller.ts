import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../schemas/User.schema";
class authController {
  showLogin = async (req: Request, res: Response) => {
    res.render("login");
  };

  showRegister = async (req: Request, res: Response) => {
    res.render("register");
  };

  loginOverGoogle = async (req: Request, res: Response) => {
    console.log(req);

    // let id = req["user"].id;
    // let user = await User.findOne({ _id: id });

    //   let token = jwt.sign(
    //     {
    //       iss: "Book Store",
    //       sub: id,
    //       iat: new Date().getTime(),
    //     },
    //     process.env.USER_CODE_SECRET,
    //     { expiresIn: 604800000 }
    //   );
    //   res.cookie("authorization", "Bearer " + token, { signed: true });
    //   res.redirect('/');
  };
}

export default new authController();
