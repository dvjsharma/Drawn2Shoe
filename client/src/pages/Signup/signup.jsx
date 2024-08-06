import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [ppic, setPpic] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState(0);
    const [showVerificationMessage, setShowVerificationMessage] = useState(false);

    const registerf = async (e) => {
        e.preventDefault();
        if (
            !(
                name.length > 0 &&
                email.length > 0 &&
                passwd.length > 0 &&
                street.length > 0 &&
                city.length > 0 &&
                state.length > 0 &&
                pincode > 0
            )
        ) {
            toast.error("All fields are necessary");
            return;
        }
        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/users/signup",
                {
                    name,
                    email,
                    ppic,
                    passwd,
                    street,
                    city,
                    state,
                    pincode,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast(data.message);
            setShowVerificationMessage(true); 
        } catch (error) {
            toast.error(error.response.data.message);
            console.error(error);
        }
    };

    return (
        <>
            <div className="">
                <div className="p-8 lg:w-1/2 mx-auto">
                    <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                        <h1 className="text-center text-sm text-gray-500 font-semibold">
                            REGISTER HERE!!!
                        </h1>

                        {showVerificationMessage ? (
                            <div className="text-center text-green-500 font-semibold mt-6">
                                <p>
                                    Please check your email ({email}) to verify your account.
                                </p>
                            </div>
                        ) : (
                            <form className="mt-6">
                                <div className="relative mb-3">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        required
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        required
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mt-3">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="password"
                                        type="text"
                                        placeholder="Password"
                                        name="password"
                                        onChange={(e) => {
                                            setPasswd(e.target.value);
                                        }}
                                        required
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mt-3">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="profile-pic"
                                        type="text"
                                        placeholder="Profile Pic"
                                        name="profile-pic"
                                        onChange={(e) => {
                                            setPpic(e.target.value);
                                        }}
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mt-3">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="street"
                                        type="text"
                                        placeholder="Street"
                                        name="street"
                                        onChange={(e) => {
                                            setStreet(e.target.value);
                                        }}
                                        required
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mt-3">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="city"
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                        required
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mt-3">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="state"
                                        type="text"
                                        placeholder="State"
                                        name="state"
                                        onChange={(e) => {
                                            setState(e.target.value);
                                        }}
                                        required
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mt-3">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="pincode"
                                        type="number"
                                        placeholder="Pincode"
                                        name="pincode"
                                        onChange={(e) => {
                                            setPincode(parseInt(e.target.value));
                                        }}
                                        required
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <button
                                        className="bg-gray-600 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition duration-200"
                                        type="submit"
                                        onClick={registerf}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        )}

                        <Link to="/login">
                            <p className="text-gray-500 mt-4 font-semibold text-center cursor-pointer">
                                Already Registered?
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
