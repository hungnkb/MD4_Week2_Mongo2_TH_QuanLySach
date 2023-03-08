import { Request, Response } from "express";
declare class EmployeeAPI {
    addEmployee: (req: Request, res: Response) => Promise<void>;
    get: (req: Request, res: Response) => Promise<void>;
}
declare const _default: EmployeeAPI;
export default _default;
