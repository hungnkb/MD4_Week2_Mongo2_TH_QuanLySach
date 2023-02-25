import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { User } from "../schemas/User.model";
import passport from "passport";
import jwt from 'jsonwebtoken'

class apiController {
  register = async (req: Request, res: Response) => {
    try {
      let { username, password } = req.body;
      const salt = await bcrypt.genSaltSync(10);
      password = await bcrypt.hashSync(password, salt);

      let newUser = new User({ username, password});
      await newUser.save();
      res.status(200).json({message: 'Register success'});

    } catch (error) {
      console.log(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    // passport.authenticate('local', (err, user) => {
    //   if (err) {
    //     return next(err);
    //   }

    //   if(!user) {
    //     return res.status(401).json('Wrong email or password');
    //   }

    //   // req.login(user, () => {
    //   //   res.status(200).json("You are authenticated");
    //   //   })

    // })(req, res, next)

    let {username, password} = req.body;
    let user = await User.findOne({username: username});
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
          let token = jwt.sign({
            iss: 'Book Store',
            sub: user.id,
            iat: new Date().getTime()

          }, process.env.USER_CODE_SECRET, {expiresIn: 60});
          res.cookie('authorization', 'Bearer ' + token, {signed: true}); 
          res.status(200).json({message: 'Login success', user, token});
        } else {
          res.status(400).json({message: 'wrong password'});
        }
      })
    }
    
    
  }
}


export default new apiController();
