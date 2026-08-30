import express from "express";

import userController from "../../controllers/client/user.controller.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { clientAuthMiddleware } from "../../middlewares/auth.js";

import validate from "../../middlewares/validate.js";
import {
  signupSchema,
  loginSchema,
  updateProfileSchema,
  verifyOtpSchema,
  resendOtpSchema,
} from "../../validations/client/user.validation.js";

import authorizeRoles from "../../middlewares/authorizeRoles.js";

import {
  clientSignupLimiter,
  clientVerifySignupOtpLimiter,
  clientLoginLimiter,
  clientVerifyLoginOtpLimiter,
  clientResendOtpLimiter,
  clientRefreshTokenLimiter,
} from "../../middlewares/rateLimit.js";
import verifyOrigin from "../../middlewares/verifyOrigin.js";

const router = express.Router();

// auth.
router.post(
  "/signup",
  verifyOrigin,
  clientSignupLimiter,
  validate(signupSchema),
  asyncHandler(userController.signup),
);

router.post(
  "/verify-signup",
  verifyOrigin,
  clientVerifySignupOtpLimiter,
  validate(verifyOtpSchema),
  asyncHandler(userController.verifySignupOtp),
);

router.post(
  "/login",
  verifyOrigin,
  clientLoginLimiter,
  validate(loginSchema),
  asyncHandler(userController.login),
);

router.post(
  "/verify-login",
  verifyOrigin,
  clientVerifyLoginOtpLimiter,
  validate(verifyOtpSchema),
  asyncHandler(userController.verifyLoginOtp),
);

router.post(
  "/resend-otp",
  verifyOrigin,
  clientResendOtpLimiter,
  validate(resendOtpSchema),
  asyncHandler(userController.resendOtp),
);

router.post(
  "/refresh-token",
  verifyOrigin,
  clientRefreshTokenLimiter,
  asyncHandler(userController.refreshToken),
);

router.get(
  "/check-user",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(userController.checkUser),
);

router.post(
  "/logout",
  verifyOrigin,
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(userController.logout),
);

// Just added for mobile application.
router.delete(
  "/delete-account",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(userController.deleteAccount),
);

// profile.
router.get(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  asyncHandler(userController.getProfile),
);
router.put(
  "/",
  clientAuthMiddleware,
  authorizeRoles("client"),
  validate(updateProfileSchema),
  asyncHandler(userController.updateProfile),
);
export default router;
