import express from "express";
import prisma from "../common/prisma/init.prisma";

const rateService = {
  // Thêm đánh giá
  addRestaurantReview: async (req) => {
    const { restaurantId, userId } = req.params;
    const { content, rating } = req.body;

    try {
      // Kiểm tra đánh giá đã tồn tại chưa
      const existingReview = await prisma.rate_res.findUnique({
        where: {
          user_id_res_id: {
            user_id: parseInt(userId),
            res_id: parseInt(restaurantId),
          },
        },
      });

      if (existingReview) {
        // Cập nhật đánh giá nếu đã tồn tại
        const updatedReview = await prisma.rate_res.update({
          where: {
            user_id_res_id: {
              user_id: parseInt(userId),
              res_id: parseInt(restaurantId),
            },
          },
          data: {
            amount: parseInt(rating),
            date_rate: new Date(),
          },
        });
        return {
          success: true,
          action: "update",
          review: updatedReview,
        };
      } else {
        // Thêm đánh giá mới
        const newReview = await prisma.rate_res.create({
          data: {
            user_id: parseInt(userId),
            res_id: parseInt(restaurantId),
            amount: parseInt(rating),
            date_rate: new Date(),
          },
        });
        return { success: true, action: "create", review: newReview };
      }
    } catch (error) {
      console.error("Error in addRestaurantReview:", error);
      throw new Error("Không thể thêm đánh giá");
    }
  },

  // Lấy danh sách đánh giá theo nhà hàng
  getRestaurantReviews: async (req) => {
    const { restaurantId } = req.params;

    try {
      const reviews = await prisma.rate_res.findMany({
        where: {
          res_id: parseInt(restaurantId),
        },
        include: {
          user: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
        },
        orderBy: {
          date_rate: "desc",
        },
      });

      return {
        success: true,
        restaurantId: parseInt(restaurantId),
        count: reviews.length,
        reviews: reviews.map((review) => ({
          userId: review.user_id,
          userName: review.user.full_name,
          rating: review.amount,
          dateRate: review.date_rate,
        })),
      };
    } catch (error) {
      console.error("Error in getRestaurantReviews:", error);
      throw new Error("Không thể lấy danh sách đánh giá");
    }
  },

  // Lấy danh sách đánh giá theo user
  getUserRestaurantReviews: async (req) => {
    const { userId } = req.params;

    try {
      const reviews = await prisma.rate_res.findMany({
        where: {
          user_id: parseInt(userId),
        },
        include: {
          restaurant: {
            select: {
              res_id: true,
              res_name: true,
              image: true,
            },
          },
        },
        orderBy: {
          date_rate: "desc",
        },
      });

      return {
        success: true,
        userId: parseInt(userId),
        count: reviews.length,
        reviews: reviews.map((review) => ({
          restaurantId: review.res_id,
          restaurantName: review.restaurant.res_name,
          restaurantImage: review.restaurant.image,
          rating: review.amount,
          dateRate: review.date_rate,
        })),
      };
    } catch (error) {
      console.error("Error in getUserRestaurantReviews:", error);
      throw new Error("Không thể lấy danh sách đánh giá theo user");
    }
  },
};

export default rateService;
