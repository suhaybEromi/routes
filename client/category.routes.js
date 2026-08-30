import express from "express";
const router = express.Router();

import categoryController from "../../controllers/client/category.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

router.get("/", asyncHandler(categoryController.getCategory));

export default router;
