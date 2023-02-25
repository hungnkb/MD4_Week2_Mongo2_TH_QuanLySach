import apiController from "../controllers/api.controller";
import express from 'express';

const apiRouter = express.Router();

// apiRouter.get('/login', apiController.showLogin);
apiRouter.post('/register', apiController.register);
apiRouter.post('/login', apiController.login)

export default apiRouter;