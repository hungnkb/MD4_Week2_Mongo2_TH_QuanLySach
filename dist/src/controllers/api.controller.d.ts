import { Request, Response, NextFunction } from "express";
declare class apiController {
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
declare const _default: apiController;
export default _default;
