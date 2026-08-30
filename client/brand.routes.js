import express from "express";
const router = express.Router();

import brandController from "../../controllers/client/brand.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";

router.get("/", asyncHandler(brandController.getBrand));

export default router;
