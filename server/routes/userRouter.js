import Router from "express";
import { userController } from "../controllers";
import { checkAuth } from "../middleware";

const userRouter = new Router();
userRouter.post("/registration", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/auth", checkAuth, userController.check);

export default userRouter;
