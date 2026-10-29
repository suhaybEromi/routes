import express from "express";
import couponController from "../../controllers/client/coupon.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";

const router = express.Router();

router.post("/validate", asyncHandler(couponController.validateCoupon));

export default router;
