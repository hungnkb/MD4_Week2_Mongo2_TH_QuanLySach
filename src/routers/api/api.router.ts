import apiController from "../../controllers/api/api.controller";
import express from "express";
import BranchAPI from "../../controllers/api/branch.api.controller";
import EmployeeApi from "../../controllers/api/employee.api.controller";

const apiRouter = express.Router();

apiRouter.get('/branch', BranchAPI.get);

apiRouter.post('/employee', EmployeeApi.addEmployee);
apiRouter.get('/employee', EmployeeApi.get)

// apiRouter.get('/login', apiController.showLogin);
// apiRouter.post("/register", apiController.register);
// apiRouter.post("/login", apiController.login);
// apiRouter.get("/logout", apiController.logout);



export default apiRouter;
