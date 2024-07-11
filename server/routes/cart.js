import express from "express";
import { getcart, addcart } from "../controllers/cart.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.get('/', isAuthenticated, getcart);

router.post('/add', isAuthenticated, addcart);


export default router;