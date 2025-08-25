import express from "express";
import likeRouter from "./like.router";
import rateRouter from "./rate.router";
import orderRouter from "./order.router";

const rootRouter = express.Router();

rootRouter.use(likeRouter);
rootRouter.use(rateRouter);
rootRouter.use(orderRouter);

export default rootRouter;
