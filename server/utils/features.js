import jwt from "jsonwebtoken";


export const sendCookie = (user, res, message, statusCode = 200) => {
    const token = jwt.sign({ email: user }, process.env.JWT_SECRET);

    res
        .status(statusCode)
        .cookie("jjtoken", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
        })
        .json({
            success: true,
            message,
        });
};