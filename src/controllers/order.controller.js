import express from "express";
import orderService from "../services/order.service";

const orderController = {
  orderFood: async (req, res) => {
    const result = await orderService.orderFood(req);
    res.json(result);
  },
};

export default orderController;
