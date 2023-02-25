import homeController from "../controllers/home.controller";
import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", homeController.showHome);

export default homeRouter;
