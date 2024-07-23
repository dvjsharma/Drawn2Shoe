import express from "express";
import { getcart, addcart,increaseQuantity, decreaseQuantity, removeItem } from "../controllers/cart.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.get('/', isAuthenticated, getcart);

router.post('/add', isAuthenticated, addcart);

router.patch("/:productId/increase", increaseQuantity);
router.patch("/:productId/decrease", decreaseQuantity);
router.delete("/:productId", removeItem);

export default router;