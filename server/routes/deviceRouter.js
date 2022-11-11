import Router from "express";
import { deviceController } from "../controllers/";

const deviceRouter = new Router();
deviceRouter.post("/", deviceController.create);
deviceRouter.get("/", deviceController.getAll);
deviceRouter.get("/:id", deviceController.getOne);

export default deviceRouter;
