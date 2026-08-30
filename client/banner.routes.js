import express from "express";
const router = express.Router();

import bannerController from "../../controllers/client/banner.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";

router.get("/", asyncHandler(bannerController.getBanner));

export default router;
