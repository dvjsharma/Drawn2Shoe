import jwt from "jsonwebtoken";
import { prisma } from "../app.js"; // Imported prisma

export const isAuthenticated = async (req, res, next) => {
    const { jjtoken } = req.cookies;
    if (!jjtoken) {
        return res.status(200).json({
            success: false,
            message: "Login First",
        });
    }

    const decoded = jwt.verify(jjtoken, process.env.JWT_SECRET);
    const user = await prisma.mainuser.findUnique({ // Changed to use Prisma
        where: { email: decoded.email },
    });

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    req.user = user;
    next();
};
