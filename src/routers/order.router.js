import express from "express";
import orderController from "../controllers/order.controller";

const orderRouter = express.Router();

orderRouter.post("/orders/:userId", orderController.orderFood);

export default orderRouter;
