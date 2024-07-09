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
    const [registered, setRegistered] = useState(false);
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
            setRegistered(true);
        } catch (error) {
            toast.error(error.response.data.message);
            console.error(error);
        }
    };
    if (registered) {
        return <Navigate replace to="/login" />;
    }
    return (
        <>
            <div className="">
                <div className="p-8 lg:w-1/2 mx-auto">
                    <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                        <h1 className="text-center text-sm text-gray-500 font-semibold">
                            REGISTER HERE!!!
                        </h1>

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
                                    id="password"
                                    type="text"
                                    placeholder="Profile Pic"
                                    name="password"
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
                                    id="password"
                                    type="text"
                                    placeholder="Street"
                                    name="password"
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
                                    id="password"
                                    type="text"
                                    placeholder="City"
                                    name="password"
                                    onChange={(e) => {
                                        setCity(e.target.value);
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
                                    id="password"
                                    type="text"
                                    placeholder="State"
                                    name="password"
                                    onChange={(e) => {
                                        setState(e.target.value);
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
                                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    id="password"
                                    type="number"
                                    placeholder="Pincode"
                                    name="password"
                                    onChange={(e) => {
                                        setPincode(e.target.value);
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

                            <div className="mt-4 flex items-center text-gray-500">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    className="mr-3"
                                />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <div className="flex items-center justify-center mt-8">
                                <button
                                    className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                    onClick={(e) => {
                                        registerf(e);
                                    }}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <hr className="m-4" />
                            <div className="flex items-center justify-center mt-5">
                                <p className=" text-gray-500 ">
                                    HAVE A ACCOUNT ?!
                                </p>
                                <Link
                                    to="/Login"
                                    className="text-white py-2 px-4 ml-3 uppercase rounded bg-green-400 hover:bg-green-500 shadow hover:shadow-lg font-medium transition transform  "
                                >
                                    Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
