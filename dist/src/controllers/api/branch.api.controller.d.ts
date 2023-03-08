import { Request, Response } from "express";
declare class BranchAPI {
    get: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BranchAPI;
export default _default;
