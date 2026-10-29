import express from "express";
const router = express.Router();

import productController from "../../controllers/client/product.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";

router.get("/", asyncHandler(productController.getProduct));

router.get(
  "/filter-options",
  asyncHandler(productController.getProductFilterOptions),
);

router.get("/:id", asyncHandler(productController.getProductById));

router.get(
  "/brownstore/products",
  asyncHandler(productController.getProductBrownStore),
);

export default router;
