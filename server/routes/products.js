import express from "express";
import { getproducts, getcategories, getproductbyid, createcustomproduct } from "../controllers/products.js";

const router = express.Router();


router.get('/shop', getproducts);

router.get('/categories', getcategories);

router.get('/product', getproductbyid);

router.post('/custom', createcustomproduct);

export default router;