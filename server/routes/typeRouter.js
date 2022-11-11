import Router from "express";
import { typeRouter } from "../controllers/";
import { checkRole } from "../middleware";

const typeRouter = new Router();
typeRouter.post("/", checkRole('ADMIN') typeRouter.create);
typeRouter.get("/", typeRouter.getAll);

export default typeRouter;
