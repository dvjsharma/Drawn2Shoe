import React from "react";
import Navbar from "./Navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-full">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
