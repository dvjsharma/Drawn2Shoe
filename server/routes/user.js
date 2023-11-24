import express from "express";
import { login, signup, getMyProfile, registerdesigner, registerretailer } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/login", login);

router.post("/signup", signup);

router.get("/me", isAuthenticated, getMyProfile);

router.post("/designer", isAuthenticated, registerdesigner);

router.post("/retailer", isAuthenticated, registerretailer);

export default router;