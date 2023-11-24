import { User } from "../models/user.js";
import jwt from "jsonwebtoken";



export const isAuthenticated = async (req, res, next) =>  {
    const {jjtoken} = req.cookies;
    if (!jjtoken)
    {
        return res.status(404).json({
            success: false,
            message: "Login First",
        });
    }

    const decoded = jwt.verify(jjtoken, process.env.JWT_SECRET);
    req.user= await User.findById(decoded._id);
    next();
}