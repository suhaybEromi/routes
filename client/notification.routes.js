import express from "express";

import notificationController from "../../controllers/client/notification.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";
import authorizeRoles from "../../middlewares/authorizeRoles.js";
import verifyOrigin from "../../middlewares/verifyOrigin.js";

const router = express.Router();

router.get(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(notificationController.getNotification),
);

router.patch(
  "/read-all",
  clientAuthMiddleware,
  verifyOrigin,
  authorizeRoles("client"),
  asyncHandler(notificationController.readAllNotification),
);

router.patch(
  "/:id/read",
  clientAuthMiddleware,
  verifyOrigin,
  authorizeRoles("client"),
  asyncHandler(notificationController.readNotification),
);

router.delete(
  "/:id",
  clientAuthMiddleware,
  verifyOrigin,
  authorizeRoles("client"),
  asyncHandler(notificationController.deleteNotification),
);

export default router;
