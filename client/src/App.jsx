import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/home";
import Categories from "./pages/Categories/categories";
import Customize from "./pages/Customize/customize";
import Shop from "./pages/Shop/shop";
import Login from "./pages/Login/login";
import ResetPassword from "./components/Reset-Password";
import ForgotPassword from "./components/Forgot-Password";
import Signup from "./pages/Signup/signup";
import VerifyEmail from "./pages/Verify-email";
import Layout_retailer from "./components/layout-retailer";
import Designer_home from "./pages/Designers";
import About from "./pages/About";
import Retailer_home from "./pages/Retailer-home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import UserProfile from "./pages/User-profile";
import PrivateRoute from "./components/PrivateRoute";
import './App.css'
function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={
                        <PrivateRoute>
                            <UserProfile />
                        </PrivateRoute>
                    } />
                    <Route path="categories" element={<Categories />} />
                    <Route path="customize" element={<Customize />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password/:token/:id" element={<ResetPassword />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="/verify-email" element={<VerifyEmail/>} />
                    <Route path="designers" element={<Designer_home />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                    <Route path="cart" element={
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>
                    } />
                    <Route path="retailer" element={<Layout_retailer />}>
                        <Route index element={<Retailer_home />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
