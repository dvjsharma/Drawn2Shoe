import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import userrouter from "./routes/user.js";
import productrouter from "./routes/products.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import cartrouter from './routes/cart.js';
import bodyParser from "body-parser";
import contactRoutes from "./routes/contactRoutes.js";

export const app = express();


config({
    path: "config.env",
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
app.use("/api/cart", cartrouter);
app.use(bodyParser.json());
app.use("/contact", contactRoutes);