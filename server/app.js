import express from "express";
import { PrismaClient } from "@prisma/client"; // Imported PrismaClient
import { config } from "dotenv";
import userrouter from "./routes/user.js";
import productrouter from "./routes/products.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import cartrouter from './routes/cart.js';
import wishlistrouter from "./routes/wishlist.js";
export const app = express();


config({
    path: "config.env",
});

export const prisma = new PrismaClient(); // Initialized PrismaClient

app.use(cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userrouter);
app.use("/api/products", productrouter);
app.use("/api/cart", cartrouter);
app.use("/api/user",wishlistrouter);