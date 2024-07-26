import express from "express";
import { addToWishlist, getWishlist } from "../controllers/wishlist.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/wishlist", isAuthenticated, addToWishlist);
router.get("/wishlist", isAuthenticated, getWishlist);

export default router;
