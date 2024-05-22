import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Divide, Divide as Hamburger } from "hamburger-react";
import { stack as Menu } from "react-burger-menu";
import logo from "../../assets/logo-final.png";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/api/users/me", {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
                setUser(data.user);
            } catch (error) {
                console.error("User not logged in", error);
            }
        };
        checkLogin();
    }, []);

    const handleLogout = async () => {
        console.log("Logout button clicked"); 
        try {
            const { data } = await axios.post("http://localhost:3000/api/users/logout", {}, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            console.log("Logout response:", data); 
            toast.success(data.message);
            setUser(null); 
        } catch (error) {
            toast.error("Logout failed");
            console.error("Logout error", error);
        }
    };

    const styles = {
        bmBurgerButton: {
            display: "none",
        },
        bmCrossButton: {
            height: "24px",
            width: "24px",
        },
        bmCross: {
            background: "#bdc3c7",
        },
        bmMenuWrap: {
            position: "fixed",
            height: "100%",
        },
        bmMenu: {
            background: "white",
            padding: "2.5em 1.5em 0",
            fontSize: "1.15em",
        },
        bmMorphShape: {
            fill: "#373a47",
        },
        bmItemList: {
            display: "flex",
            flexDirection: "column",
            color: "black",
            padding: "0.8em",
        },
        bmItem: {
            display: "inline-block",
            padding: "0.5em",
        },
        bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
        },
    };

    return (
        <>
            <Menu
                right
                isOpen={toggled}
                styles={styles}
                onClose={() => setToggled(false)}
            >
                <Link to="/" className="menu-item" onClick={() => setToggled(false)}>Home</Link>
                <Link to="categories" className="menu-item" onClick={() => setToggled(false)}>Categories</Link>
                <Link to="customize" className="menu-item" onClick={() => setToggled(false)}>Customize</Link>
                <Link to="shop" className="menu-item" onClick={() => setToggled(false)}>Shop</Link>
                {user ? (
                    <button className="menu-item" onClick={() => { setToggled(false); handleLogout(); }}>Logout</button>
                ) : (
                    <Link to="login" className="menu-item" onClick={() => setToggled(false)}>Login</Link>
                )}
            </Menu>
            <nav className="flex items-center py-4 px-2 text-sm">
                <div className="flex gap-4 w-[30%] justify-center items-center max-lg:hidden">
                    <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-8 " : null}>Home</NavLink>
                    <NavLink to="categories" className={({ isActive }) => isActive ? "underline underline-offset-8 " : null}>Categories</NavLink>
                    <NavLink to="customize" className={({ isActive }) => isActive ? "underline underline-offset-8 " : null}>Customize</NavLink>
                    <NavLink to="shop" className={({ isActive }) => isActive ? "underline underline-offset-8 " : null}>Shop</NavLink>
                </div>
                <div className="flex w-[50%] text-left justify-center items-center max-lg:w-full max-lg:justify-start">
                    <div className="lg:hidden">
                        <Hamburger size={20} toggled={toggled} toggle={setToggled} />
                    </div>
                    <Link to="/" className="font-bold text-[25px]">
                        <img src={logo} alt="Logo" className="w-40" />
                    </Link>
                </div>
                <div className={`flex w-[30%] justify-center gap-4 max-lg:w-full max-lg:justify-end ${user ? "hidden" : ""}`}>
                    <Link to="login">
                        <button className="inline-block rounded-full border-2 border-neutral-800 px-4 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-black hover:text-white focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 max-lg:hidden">Login</button>
                    </Link>
                    <Link to="signup">
                        <button className="inline-block bg-black rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-white hover:text-black focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900">SignUp</button>
                    </Link>
                </div>
                <div className={`flex w-[30%] text-base items-center justify-center gap-4 max-lg:w-full max-lg:justify-end ${!user ? "hidden" : ""}`}>
                    Hi {user && user.name}
                    <Link to="cart">
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/unicons/cart-38.png" className="w-8" alt="Cart" />
                    </Link>
                    <button onClick={handleLogout} className="text-neutral-800 hover:text-black">Logout</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
