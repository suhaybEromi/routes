import express from "express";
import appDownloadController from "../../controllers/client/appDownload.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";

const router = express.Router();

router.get("/", asyncHandler(appDownloadController.getAppDownload));

export default router;
