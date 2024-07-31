import bcrypt from "bcryptjs";
import { sendCookie } from "../utils/features.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const signup = async (req, res) => {
    const { name, email, ppic, passwd, street, city, state, pincode } = req.body;

    try {
        const existingUser = await prisma.mainuser.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(404).json({
                success: false,
                message: "User already exists."
            });
        }

        const hpasswd = await bcrypt.hash(passwd, 10);
        const newUser = await prisma.mainuser.create({
            data: {
                name,
                email,
                profilepic: ppic,
                passwd: hpasswd,
                street,
                city,
                state,
                pincode: parseInt(pincode), // making pincode as an integer because it's get a string from 'req'
            },
        });

        sendCookie(newUser.email, res, "Registered Successfully", 201);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const login = async (req, res) => {
    const { email, passwd } = req.body;

    try {
        const user = await prisma.mainuser.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid Email."
            });
        }

        const isMatch = await bcrypt.compare(passwd, user.passwd);
        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "Invalid Password."
            });
        }

        sendCookie(user.email, res, `Welcome back, ${user.name}`, 200);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getMyProfile = (req, res) => {
    res.status(200).json({
        message: "Success",
        user: req.user,
    });
};

const updateUserProfile = async (req, res) => {
    const { name, street, city, state, pincode } = req.body;
    const email = req.user.email;

    try {
        const updatedUser = await prisma.mainuser.update({
            where: { email },
            data: {
                name,
                street,
                city,
                state,
                pincode: parseInt(pincode),
            },
        });

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: updatedUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};



const registerdesigner = async (req, res) => {
    const { description, portfoliolink } = req.body;

    try {
        const existingDesigner = await prisma.designer.findUnique({
            where: { email: req.user.email },
        });

        if (existingDesigner) {
            return res.status(404).json({
                success: false,
                message: "Designer already exists."
            });
        }

        await prisma.designer.create({
            data: {
                email: req.user.email,
                description,
                portfoliolink,
            },
        });

        return res.status(200).json({
            success: true,
            message: "Registered Designer"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const registerretailer = async (req, res) => {
    const { shopname, contactno, shopaddr, shopcity, shoppin } = req.body;

    try {
        await prisma.retailer.create({
            data: {
                email: req.user.email,
                shopName: shopname,
                contactNumber: contactno,
                shopaddressLine1: shopaddr,
                shopCity: shopcity,
                shopPincode: parseInt(shoppin), // converting it  an integer value
            },
        });

        return res.status(200).json({
            success: true,
            message: "Registered Retailer"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export { login, signup, getMyProfile, updateUserProfile, registerdesigner, registerretailer };
