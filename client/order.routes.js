import express from "express";

import orderController from "../../controllers/client/order.controller.js";

import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";
import authorizeRoles from "../../middlewares/authorizeRoles.js";

const router = express.Router();

router.get(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(orderController.getOrders),
);

router.get(
  "/:orderId",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(orderController.getSingleOrder),
);

router.post(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(orderController.createOrder),
);

export default router;
