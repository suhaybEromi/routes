import express from "express";

import paymentController from "../../controllers/client/payment.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";
import authorizeRoles from "../../middlewares/authorizeRoles.js";

const router = express.Router();

router.post("/nass/callback", asyncHandler(paymentController.nassCallback));

// Authenticated customer creates payment
router.post(
  "/nass/:orderId",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(paymentController.createPayment),
);

// Authenticated customer verifies payment
router.get(
  "/nass/:orderId/verify",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(paymentController.verifyPayment),
);

export default router;
