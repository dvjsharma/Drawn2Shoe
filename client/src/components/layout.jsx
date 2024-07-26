import React from "react";
import Navbar from "./Navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Preloader from "./Preloader/Preloader";
import BackToTop from "./BackToTop/BackToTop";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-full">
                <Outlet />
            </div>
            <Footer />
            <Preloader />
            <BackToTop/>
        </>
    );
};

export default Layout;
