import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import userrouter from "./routes/user.js";
import productrouter from "./routes/products.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import cartrouter from './routes/cart.js';

export const app = express();


config({
    path: "config.env",
});

app.listen(process.env.PORT, () => {
    console.log("Server is up and burning!");
})

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