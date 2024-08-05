import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/api/users/forgot-password",
                { email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center my-4 mb-12 text-gray-600">Find Your Account</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="my-3">
                        <label className="block text-lg text-gray-400 mb-2">Enter your email below.</label>
                        <input
                            type="email"
                             className="appearance-none border pl-4 border-gray-300 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                             value={email}
                             placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;