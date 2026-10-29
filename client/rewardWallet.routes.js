import { Router } from "express";

import rewardWalletController from "../../controllers/client/rewardWallet.controller.js";

import { clientAuthMiddleware } from "../../middlewares/auth.js";
import asyncHandler from "../../middlewares/asyncHandler.js";

const router = Router();

// GET - My reward wallet
router.get(
  "/wallet",
  clientAuthMiddleware,
  asyncHandler(rewardWalletController.getMyRewardWallet),
);

// GET - My reward transactions
router.get(
  "/wallet/transactions",
  clientAuthMiddleware,
  asyncHandler(rewardWalletController.getMyRewardTransactions),
);

export default router;
