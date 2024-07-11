import React from "react";
import Navbar from "./Navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Preloader from "./Preloader/Preloader";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-full">
                <Outlet />
            </div>
            <Footer />
            <Preloader />
        </>
    );
};

export default Layout;
