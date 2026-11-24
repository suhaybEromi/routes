import express from "express";
import cartController from "../../controllers/client/cart.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

import authorizeRoles from "../../middlewares/authorizeRoles.js";
const router = express.Router();

router.get(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(cartController.getCart),
);

router.post(
  "/delivery-fee",
  // clientAuthMiddleware,
  // authorizeRoles("client"),
  asyncHandler(cartController.getCartDeliveryFee),
);

router.post(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(cartController.addCart),
);

router.post(
  "/merge",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(cartController.mergeGuestCart),
);

router.put(
  "/:itemId",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(cartController.updateCartItem),
);

router.delete(
  "/deleteCart",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(cartController.deleteCart),
);
router.delete(
  "/:itemId",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(cartController.removeCartItem),
);

export default router;
