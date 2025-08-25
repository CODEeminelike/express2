import express from "express";
import rateController from "../controllers/rate.controller";

const rateRouter = express.Router();

//Lấy danh sách đánh giá theo nhà hàng
rateRouter.get(
  "/restaurants/:restaurantId/reviews",
  rateController.getRestaurantReviews
);

//Lấy danh sách đánh giá theo user
rateRouter.get(
  "/users/:userId/restaurant-reviews ",
  rateController.getUserRestaurantReviews
);

//Thêm đánh giá
rateRouter.post(
  "/restaurants/:restaurantId/reviews/:userId",
  rateController.addRestaurantReview
);

export default rateRouter;
