import express from "express";
const router = express.Router();

import productController from "../../controllers/client/product.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

router.get("/", asyncHandler(productController.getProduct));

router.get(
  "/filter-options",
  asyncHandler(productController.getProductFilterOptions),
);

router.get("/:id", asyncHandler(productController.getProductById));

export default router;
