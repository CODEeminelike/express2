import express from "express";
import likeController from "../controllers/like.controller";
const likeRouter = express.Router();

// Like/Unlike nhà hàng
likeRouter.get(
  "/restaurants/:restaurantId/users/:userId/likes",
  likeController.handleLikeRestaurant
);

// Lấy danh sách like theo nhà hàng
likeRouter.get(
  "/restaurants/:restaurantId/likes",
  likeController.getRestaurantLikes
);

//Lấy danh sách like theo user
likeRouter.get(
  "/users/:userId/restaurant-likes",
  likeController.getUserLikes
);

export default likeRouter;
