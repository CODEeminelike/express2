import express from "express";
import prisma from "../common/prisma/init.prisma";

const orderService = {
  orderFood: async (req) => {
    const { userId } = req.params;
    const { foodId, amount, arrSubId } = req.body; // arrSubId là mảng các sub_id

    try {
      // Tạo mã order ngẫu nhiên
      const code =
        "ORDER_" +
        Math.random().toString(36).substr(2, 9).toUpperCase();

      // Tạo order
      const order = await prisma.order.create({
        data: {
          user_id: parseInt(userId),
          food_id: parseInt(foodId),
          amount: parseInt(amount),
          code: code,
          art_sub_id:
            arrSubId && arrSubId.length > 0 ? arrSubId[0] : null, // Lấy sub_id đầu tiên nếu có
        },
      });

      return {
        success: true,
        message: "Đặt món thành công",
        order: {
          orderId: order.order_id,
          code: order.code,
          userId: order.user_id,
          foodId: order.food_id,
          amount: order.amount,
          subFoodId: order.art_sub_id,
        },
      };
    } catch (error) {
      console.error("Error in orderFood:", error);
      throw new Error("Không thể đặt món");
    }
  },
};

export default orderService;
