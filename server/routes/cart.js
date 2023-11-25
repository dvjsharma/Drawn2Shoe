import express from "express";
import { getcart } from "../controllers/cart.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.get('/', isAuthenticated, getcart);


export default router;