import jwt from "jsonwebtoken";
import { con } from "../app.js";


export const isAuthenticated = async (req, res, next) => {
    const { jjtoken } = req.cookies;
    if (!jjtoken) {
        return res.status(404).json({
            success: false,
            message: "Login First",
        });
    }

    const decoded = jwt.verify(jjtoken, process.env.JWT_SECRET);
    con.query(`SELECT * FROM mainuser WHERE email='${decoded.email}'`, (err, result) => {
        if (err) {
            throw err;
        }
        req.user = result[0];
        next();
    });
}