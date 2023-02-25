import BookController from "../controllers/book.controller";
import express from 'express';


const bookRouter = express.Router();

bookRouter.get('/create', BookController.showCreate);
bookRouter.post('/create', BookController.createBook);

export default bookRouter;