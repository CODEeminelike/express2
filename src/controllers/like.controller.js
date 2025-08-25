import express from "express";
import likeService from "../services/like.services";

const likeController = {
  // Like/Unlike nhà hàng
  handleLikeRestaurant: async (req, res) => {
    const result = await likeService.handleLikeRestaurant(req);
    res.json(result);
  },

  // Lấy danh sách like theo nhà hàng
  getRestaurantLikes: async (req, res) => {
    // Logic lấy danh sách like theo restaurantId
    const result = await likeService.getRestaurantLikes(req);
    res.json(result);
  },

  // Lấy danh sách like theo user
  getUserLikes: async (req, res) => {
    // Logic lấy danh sách like theo userId
    const result = await likeService.getUserLikes(req);
    res.json(result);
  },
};

export default likeController;
