import express from "express";
import { getproducts, getcategories, getproductbyid, createcustomproduct } from "../controllers/products.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();


router.get('/shop', getproducts);

router.get('/categories', getcategories);

router.get('/product', getproductbyid);

router.post('/custom', isAuthenticated, createcustomproduct); 

export default router;