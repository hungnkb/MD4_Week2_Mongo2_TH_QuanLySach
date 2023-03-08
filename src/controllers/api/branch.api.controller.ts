import { Request, Response } from "express";
import Branch from "../../schemas/Branch.schema";

class BranchAPI {
  get = async (req: Request, res: Response) => {
    try {
      let branchList = await Branch.find({});
      if (branchList) {
        res.status(200).json(branchList);
      } else {
        res.status(400).json({message: 'error'})
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new BranchAPI();
