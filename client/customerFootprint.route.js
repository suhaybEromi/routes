import express from "express";

import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

import customerFootprintController from "../../controllers/client/customerFootprint.controller.js";

const router = express.Router();

// Logged-in customers
router.post(
  "/track",
  clientAuthMiddleware,
  asyncHandler(customerFootprintController.trackCustomerEvent),
);

// Guest visitors (without login)
router.post(
  "/track/guest",
  asyncHandler(customerFootprintController.trackCustomerEvent),
);

export default router;
