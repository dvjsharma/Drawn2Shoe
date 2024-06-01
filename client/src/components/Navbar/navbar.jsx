import React, { useEffect, useState } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { Divide, Divide as Hamburger } from "hamburger-react";
import { stack as Menu } from "react-burger-menu";
import logo from "../../assets/logo-final.png";
import logo2 from "../../assets/shoelogo.jpg";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { logOut, setUsername } from "../../redux/auth-slice";

const Navbar = () => {

    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const logged = useSelector((state)=>state.auth.value.isAuth);
    const username = useSelector((state)=>state.auth.value.username);


    useEffect(() => {
        const checklogin = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:3000/api/users/me",
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                dispatch(setUsername({username:data.user.name}));
            } catch (e) {
                if(e.response.status !== 200){
                    dispatch(logOut());
                }
            }
        };

        if(logged){
            checklogin();
        }
    }, [logged]);

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
            <nav className="flex items-center py-4 px-2 text-md">
                <div className="flex gap-5 w-[30%] justify-center items-center max-lg:hidden">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link-active underline nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10"
                                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="categories"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link-active underline nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
                                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
                        }
                    >
                        Categories
                    </NavLink>
                    <NavLink
                        to="customize"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link-active underline nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
                                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
                        }
                    >
                        Customize
                    </NavLink>
                    <NavLink
                        to="shop"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link-active underline nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
                                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
                        }
                    >
                        Shop
                    </NavLink>
                </div>
                <div className="flex w-[69%] text-left justify-center items-center max-lg:w-full max-lg:justify-start">
                    <div className="lg:hidden">
                        <Divide
                            size={20}
                            toggled={toggled}
                            toggle={setToggled}
                        />
                    </div>
                    <Link to="/" className="font-bold text-[25px]">
                        <img src={logo} alt="" className="w-40" />
                    </Link>
                </div>
                {
                    !logged && (
                        <div
                        className="flex w-[30%] justify-center gap-4 max-lg:w-full max-lg:justify-end "
                        >
                            <Link to="login">
                                {" "}
                                <button className="inline-block rounded-full border-2 border-neutral-800 px-4 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-black hover:text-white focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 max-lg:hidden">
                                    Login
                                </button>{" "}
                            </Link>
                            <Link to="signup">
                                {" "}
                                <button className="inline-block bg-black  rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-white hover:text-black focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 ">
                                    SignUp
                                </button>{" "}
                            </Link>
                        </div>
                        )
                }
                {
                    logged && (
                        <div
                            className="flex w-[30%] text-base items-center justify-center gap-4 max-lg:w-full max-lg:justify-end "
                        >
                            Hi {username}
                            <Link to="cart">
                                <img
                                    src="https://icons.veryicon.com/png/o/miscellaneous/unicons/cart-38.png"
                                    className="w-8"
                                    alt=""
                                />
                            </Link>
                            <button onClick={()=>dispatch(logOut())}>
                                <svg
                                    viewBox="0 0 900 1000"
                                    fill="currentColor"
                                    height="25px"
                                    width="25px"
                                    >
                                        <path d="M502 850V750h98v100c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 876.667 0 850V150c0-28 10-51.667 30-71s43.333-29 70-29h400c28 0 51.667 9.667 71 29s29 43 29 71v150h-98V150H100v700h402m398-326L702 720V600H252V450h450V330l198 194" />
                                </svg>
                            </button>
                        </div>
                    )
                }

            </nav>
        </>
    );
};

export default Navbar;
