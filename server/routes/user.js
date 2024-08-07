import express from "express";
import { login, signup, getMyProfile,updateUserProfile, registerdesigner, registerretailer } from "../controllers/user.js";
import { requestPasswordReset, resetPassword } from "../controllers/forgotPassword.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { verifyEmail } from "../controllers/verifyEmail.js";
const router = express.Router();


router.post("/login", login);

router.post("/signup", signup);

router.get('/verify-email', verifyEmail);

router.post("/forgot-password", requestPasswordReset);

router.post("/reset-password/:token/:id", resetPassword);

router.get("/me", isAuthenticated, getMyProfile);

router.patch("/me", isAuthenticated, updateUserProfile); 

router.post("/designer", isAuthenticated, registerdesigner);

router.post("/retailer", isAuthenticated, registerretailer);

export default router;