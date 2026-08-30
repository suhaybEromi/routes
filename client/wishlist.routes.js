import express from "express";
const router = express.Router();

import wishlistController from "../../controllers/client/wishlist.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

import authorizeRoles from "../../middlewares/authorizeRoles.js";

router.get(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(wishlistController.getWishlist),
);

router.post(
  "/toggle",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(wishlistController.toggleWishlist),
);

router.delete(
  "/clear",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(wishlistController.clearWishlist),
);

router.delete(
  "/:productId",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(wishlistController.removeFromWishlist),
);

export default router;
