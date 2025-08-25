import express from "express";
import prisma from "../common/prisma/init.prisma";

const likeService = {
  // Like/Unlike nhà hàng
  handleLikeRestaurant: async (req) => {
    const { restaurantId, userId } = req.params;

    try {
      // Kiểm tra xem user đã like nhà hàng chưa
      const existingLike = await prisma.like_res.findUnique({
        where: {
          user_id_res_id: {
            user_id: parseInt(userId),
            res_id: parseInt(restaurantId),
          },
        },
      });

      if (existingLike) {
        // Nếu đã like rồi thì xóa (unlike)
        await prisma.like_res.delete({
          where: {
            user_id_res_id: {
              user_id: parseInt(userId),
              res_id: parseInt(restaurantId),
            },
          },
        });

        return {
          success: true,
          restaurantId: parseInt(restaurantId),
          userId: parseInt(userId),
          action: "unlike",
          message: "Đã unlike nhà hàng thành công",
        };
      } else {
        // Nếu chưa like thì thêm mới
        await prisma.like_res.create({
          data: {
            user_id: parseInt(userId),
            res_id: parseInt(restaurantId),
            date_like: new Date(),
          },
        });

        return {
          success: true,
          restaurantId: parseInt(restaurantId),
          userId: parseInt(userId),
          action: "like",
          message: "Đã like nhà hàng thành công",
        };
      }
    } catch (error) {
      console.error("Error in handleLikeRestaurant:", error);
      throw new Error("Không thể xử lý like/unlike nhà hàng");
    }
  },

  // Lấy danh sách like theo nhà hàng
  getRestaurantLikes: async (req) => {
    const { restaurantId } = req.params;

    try {
      const likes = await prisma.like_res.findMany({
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
          date_like: "desc",
        },
      });

      return {
        success: true,
        restaurantId: parseInt(restaurantId),
        count: likes.length,
        likes: likes.map((like) => ({
          userId: like.user_id,
          userName: like.user.full_name,
          userEmail: like.user.email,
          dateLike: like.date_like,
        })),
      };
    } catch (error) {
      console.error("Error in getRestaurantLikes:", error);
      throw new Error("Không thể lấy danh sách like theo nhà hàng");
    }
  },

  // Lấy danh sách like theo user
  getUserLikes: async (req) => {
    const { userId } = req.params;

    try {
      const likes = await prisma.like_res.findMany({
        where: {
          user_id: parseInt(userId),
        },
        include: {
          restaurant: {
            select: {
              res_id: true,
              res_name: true,
              image: true,
              desc: true,
            },
          },
        },
        orderBy: {
          date_like: "desc",
        },
      });

      return {
        success: true,
        userId: parseInt(userId),
        count: likes.length,
        likes: likes.map((like) => ({
          restaurantId: like.res_id,
          restaurantName: like.restaurant.res_name,
          restaurantImage: like.restaurant.image,
          restaurantDesc: like.restaurant.desc,
          dateLike: like.date_like,
        })),
      };
    } catch (error) {
      console.error("Error in getUserLikes:", error);
      throw new Error("Không thể lấy danh sách like theo user");
    }
  },
};

export default likeService;
