import express from "express";
const router = express.Router();

import dealController from "../../controllers/client/deal.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";
import authorizeRoles from "../../middlewares/authorizeRoles.js";

router.get("/", asyncHandler(dealController.getDeal));

router.get("/:dealId", asyncHandler(dealController.getDealById));

export default router;
