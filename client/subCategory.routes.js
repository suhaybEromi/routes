import express from "express";
const router = express.Router();

import subCategoryController from "../../controllers/client/subCategory.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

router.get("/", asyncHandler(subCategoryController.getSubCategory));

export default router;
