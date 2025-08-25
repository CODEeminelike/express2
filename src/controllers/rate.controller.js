import express from "express";
import rateService from "../services/rate.service";

const rateController = {
  // Thêm đánh giá
  addRestaurantReview: async (req, res) => {
    try {
      const result = await rateService.addRestaurantReview(req);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Lấy danh sách đánh giá theo nhà hàng
  getRestaurantReviews: async (req, res) => {
    try {
      const result = await rateService.getRestaurantReviews(req);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Lấy danh sách đánh giá theo user
  getUserRestaurantReviews: async (req, res) => {
    try {
      const result = await rateService.getUserRestaurantReviews(req);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default rateController;
