import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import userrouter from "./routes/user.js";
import productrouter from "./routes/products.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

export const app = express();


config({
    path: "./data/config.env",
});

export const con = connectDB();

app.use(cors({
origin: true,
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userrouter);
app.use("/api/products", productrouter);