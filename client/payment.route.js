import express from "express";
import paymentController from "../../controllers/client/payment.controller.js";

import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";
import authorizeRoles from "../../middlewares/authorizeRoles.js";

const router = express.Router();

router.post("/rasedi/callback", asyncHandler(paymentController.rasediCallback));

router.post(
  "/rasedi/:orderId",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(paymentController.createPayment),
);

router.get(
  "/rasedi/:orderId/verify",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(paymentController.verifyPayment),
);

export default router;
