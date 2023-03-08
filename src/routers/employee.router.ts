import express from 'express';
import employeeController from '../controllers/employee.controller';

let employeeRouter = express.Router();

employeeRouter.get('/', employeeController.home)

export default employeeRouter;
