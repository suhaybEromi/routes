// client routes.
import clientUserRoutes from "./routes/client/user.routes.js";
import clientBrandRoutes from "./routes/client/brand.routes.js";
import clientCategoryRoutes from "./routes/client/category.routes.js";
import clientSubCategoryRoutes from "./routes/client/subCategory.routes.js";
import clientCollectionRoutes from "./routes/client/collection.routes.js";
import clientProductRoutes from "./routes/client/product.routes.js";
import clientNotificationRoutes from "./routes/client/notification.routes.js";
import clientWishlistRoutes from "./routes/client/wishlist.routes.js";
import clientDealRoutes from "./routes/client/deal.routes.js";
import clientBannerRoutes from "./routes/client/banner.routes.js";
import clientCartRoutes from "./routes/client/cart.routes.js";
import clientOrderRoutes from "./routes/client/order.routes.js";
import clientPaymentRoutes from "./routes/client/payment.route.js";
import clientCouponRoutes from "./routes/client/coupon.routes.js";
import clientRewardWalletRoutes from "./routes/client/rewardWallet.routes.js";

const prefix = `/${process.env.PREFIX_ROUTES}`;

const clientPrefix = `${process.env.CLIENT_PREFIX_ROUTES}`;

// configure client routes.
app.use(`${prefix}/${clientPrefix}/user`, clientUserRoutes);
app.use(`${prefix}/${clientPrefix}/brand`, clientBrandRoutes);
app.use(`${prefix}/${clientPrefix}/category`, clientCategoryRoutes);
app.use(`${prefix}/${clientPrefix}/subcategory`, clientSubCategoryRoutes);
app.use(`${prefix}/${clientPrefix}/collection`, clientCollectionRoutes);
app.use(`${prefix}/${clientPrefix}/product`, clientProductRoutes);
app.use(`${prefix}/${clientPrefix}/notification`, clientNotificationRoutes);
app.use(`${prefix}/${clientPrefix}/wishlist`, clientWishlistRoutes);
app.use(`${prefix}/${clientPrefix}/deal`, clientDealRoutes);
app.use(`${prefix}/${clientPrefix}/banner`, clientBannerRoutes);
app.use(`${prefix}/${clientPrefix}/cart`, clientCartRoutes);
app.use(`${prefix}/${clientPrefix}/order`, clientOrderRoutes);
app.use(`${prefix}/${clientPrefix}/payments`, clientPaymentRoutes);
app.use(`${prefix}/${clientPrefix}/coupon`, clientCouponRoutes);
app.use(`${prefix}/${clientPrefix}/rewards`, clientRewardWalletRoutes);
