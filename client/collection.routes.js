import express from "express";
const router = express.Router();

import collectionController from "../../controllers/client/collection.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

router.get("/", asyncHandler(collectionController.getCollection));

export default router;
