import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Divide, Divide as Hamburger } from "hamburger-react";
import { stack as Menu } from "react-burger-menu";
import logo from "../../assets/logo-final.png";
import axios from "axios";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import logowhite from '../../assets/logowhite.png'
import logoblack from '../../assets/logoblack.png'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '../../redux/actions/themeActions';

const Navbar = () => {
    const [user, setUser] = useState();
    
    // For Dark Mode
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    // For Dark Mode

    useEffect(() => {
        const checklogin = async () => {
            const { data } = await axios.get(
                "http://localhost:3000/api/users/me",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            setUser(data.user.name);
        };
        checklogin();
    }, []);

    // For Dark Mode using Redux
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dispatch(setTheme('dark'));
        } else {
            dispatch(setTheme('light'));
        }
    }, [dispatch]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    // For Dark Mode using Redux

    var styles = {
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
    const [toggled, setToggled] = useState(false);

    return (
        <>
            <Menu
                right
                isOpen={toggled}
                styles={styles}
                onClose={() => setToggled(false)}
            >
                <Link
                    to="/"
                    className="menu-item"
                    onClick={() => {
                        setToggled(false);
                    }}
                >
                    Home
                </Link>
                <Link
                    to="categories"
                    className="menu-item"
                    onClick={() => {
                        setToggled(false);
                    }}
                >
                    Categories
                </Link>
                <Link
                    to="customize"
                    className="menu-item"
                    onClick={() => {
                        setToggled(false);
                    }}
                >
                    Customize
                </Link>
                <Link
                    to="shop"
                    className="menu-item"
                    onClick={() => {
                        setToggled(false);
                    }}
                >
                    Shop
                </Link>
                <Link
                    to="login"
                    className="menu-item"
                    onClick={() => {
                        setToggled(false);
                    }}
                >
                    Login
                </Link>
            </Menu>
            <nav className="flex items-center py-4 px-2 text-sm   dark:text-white">
                <div className="flex gap-4 w-[30%] justify-center items-center max-lg:hidden">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "underline underline-offset-8 " : null
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="categories"
                        className={({ isActive }) =>
                            isActive ? "underline underline-offset-8 " : null
                        }
                    >
                        Categories
                    </NavLink>
                    <NavLink
                        to="customize"
                        className={({ isActive }) =>
                            isActive ? "underline underline-offset-8 " : null
                        }
                    >
                        Customize
                    </NavLink>
                    <NavLink
                        to="shop"
                        className={({ isActive }) =>
                            isActive ? "underline underline-offset-8 " : null
                        }
                    >
                        Shop
                    </NavLink>
                </div>
                <div className="flex w-[50%] text-left justify-center items-center max-lg:w-full max-lg:justify-start">
                    <div className="lg:hidden">
                        <Divide
                            size={20}
                            toggled={toggled}
                            toggle={setToggled}
                        />
                    </div>
                    <Link to="/" className="font-bold text-[25px]">
                        <img src={theme === "dark" ? logowhite : logoblack} alt="" className="w-40" /> 
                    </Link>
                </div>
                <div
                    className={`flex w-[30%] justify-center gap-4 max-lg:w-full max-lg:justify-end ${
                        user ? "hidden" : ""
                    }`}
                >
                    <div onClick={() => dispatch(toggleTheme())} className="text-2xl border rounded-full border-lg border-black dark:border dark:border-lg dark:rounded-full dark:border-yellow-500 p-1 cursor-pointer hover:scale-110 transition-all dark:text-yellow-400 text-center self-center">
                        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
                    </div>
                    <Link to="login">
                        {" "}
                        <button className="inline-block rounded-full border-2 border-neutral-800 px-4 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-black hover:text-white focus:border-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 max-lg:hidden dark:border-white dark:text-white dark:hover:bg-gray-100 dark:hover:text-black">
                            Login
                        </button>{" "}
                    </Link>
                    <Link to="signup">
                        {" "}
                        <button className="inline-block bg-black  rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-white hover:text-black focus:border-neutral-800 focus:text-white focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-white dark:bg-gray-100 dark:text-black dark:hover:text-white dark:hover:bg-black">
                            SignUp
                        </button>{" "}
                    </Link>
                </div>
                <div
                    className={`flex w-[30%] text-base items-center justify-center gap-4 max-lg:w-full max-lg:justify-end dark:text-white ${
                        !user ? "hidden" : ""
                    }`}
                >
                    Hi {user}
                    <Link to="cart">
                        <img
                            src="https://icons.veryicon.com/png/o/miscellaneous/unicons/cart-38.png"
                            className="w-8"
                            alt=""
                        />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
