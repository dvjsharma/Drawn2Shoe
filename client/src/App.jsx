import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Layout_retailer from "./components/layout-retailer";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories/categories";
import Customize from "./pages/Customize/customize";
import Designer_home from "./pages/Designers";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Product from "./pages/Product";
import Retailer_home from "./pages/Retailer-home";
import Shop from "./pages/Shop/shop";
import Signup from "./pages/Signup/signup";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="customize" element={<Customize />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="designers" element={<Designer_home />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="retailer" element={<Layout_retailer />}>
                        <Route index element={<Retailer_home />} />
                    </Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
