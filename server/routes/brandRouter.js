import Router from "express";
import {brandController} from "../controllers/";

const brandRouter = new Router();
brandRouter.post("/", brandController.create);
brandRouter.get("/", brandController.getAll);

export default brandRouter;
