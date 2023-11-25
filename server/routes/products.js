import express from "express";
import { getproducts, getcategories, getproductbyid } from "../controllers/products.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.get('/shop', getproducts);

router.get('/categories', getcategories);

router.get('/product', getproductbyid);

export default router;