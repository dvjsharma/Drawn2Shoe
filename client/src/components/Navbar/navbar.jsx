import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Divide } from "hamburger-react";
import { stack as Menu } from "react-burger-menu";
import logo from "../../assets/logo-final.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logOut, setUsername } from "../../redux/auth-slice";

const Navbar = () => {
  const [user, setUser] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false); // Added state for dropdown
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.value.isAuth);
  const userProfile = useSelector((state) => state.auth.value.username);
  const navigate = useNavigate(); // Added useNavigate hook

  useEffect(() => {
    const checklogin = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/users/me", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        dispatch(setUsername({ username: data.user.profilepic }));
      } catch (e) {
        if (e.response && e.response.status !== 200) {
          dispatch(logOut());
        }
      }
    };

    if (logged) {
      checklogin();
    }
  }, [logged]);

  // Adding a dropdown on profile photo
  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  // used for preventing to go to /profile , /cart page without login
  const handleNavigation = (path) => {
    if (!logged) {
      navigate("/login"); 
    } else {
      navigate(path); 
    }
  };

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
      <nav className="flex items-center border border-gray-300 py-4 px-2 text-md">
        <div className="flex gap-5 w-[30%] justify-center items-center max-lg:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link-active font-bold nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 w-10"
                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="categories"
            className={({ isActive }) =>
              isActive
                ? "nav-link-active font-bold nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 w-10 mr-8"
                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="customize"
            className={({ isActive }) =>
              isActive
                ? "nav-link-active font-bold nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 w-10 mr-8"
                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
            }
          >
            Customize
          </NavLink>
          <NavLink
            to="shop"
            className={({ isActive }) =>
              isActive
                ? "nav-link-active font-bold nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 w-10 mr-8"
                : "nav-link bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:ring-white-300 hover:font-bold w-10 mr-8"
            }
          >
            Shop
          </NavLink>
        </div>
        <div className="flex w-[59%] text-left justify-center items-center max-lg:w-full max-lg:justify-start">
          <div className="lg:hidden">
            <Divide size={20} toggled={toggled} toggle={setToggled} />
          </div>
          <Link to="/" className="font-bold text-[25px]">
            <img src={logo} alt="" className="w-40" />
          </Link>
        </div>
        {!logged && (
          <div className="flex w-[30%] justify-center gap-4 max-lg:w-full max-lg:justify-end">
            <Link to="login">
              {" "}
              <button className="inline-block rounded-full border-2 border-neutral-800 px-4 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-black hover:text-white focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 max-lg:hidden">
                Login
              </button>{" "}
            </Link>
            <Link to="signup">
              {" "}
              <button className="inline-block bg-black rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-[12px] font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-white hover:text-black focus:bg-white focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900">
                SignUp
              </button>{" "}
            </Link>
          </div>
        )}
        {logged && (
          <div className="flex w-[20%] text-base items-center justify-center gap-8 max-lg:w-full max-lg:justify-end">
            <button onClick={() => handleNavigation("cart")}>
              {/* Used handleNavigation for cart button */}
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/unicons/cart-38.png"
                className="w-8"
                alt=""
              />
            </button>
            <div className="relative">
              <img
                src={userProfile || "../src/assets/avatar.svg"}
                alt="Profile"
                className="rounded-full border w-8 cursor-pointer"
                onClick={handleProfileClick} 
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <button
                        onClick={() =>{ 
                            handleNavigation("/profile");
                            setDropdownOpen(false);
                        }} 
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        User Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          dispatch(logOut());
                          setDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
