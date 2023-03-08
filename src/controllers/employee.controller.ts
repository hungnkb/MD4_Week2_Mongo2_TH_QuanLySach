import {Request, Response} from 'express';

class EmployeeController {

    home = (req: Request, res: Response) => {
        res.render('employee');
    }
}

export default new EmployeeController();
