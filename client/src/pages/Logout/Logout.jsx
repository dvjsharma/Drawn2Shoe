import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                const { data } = await axios.post(
                    "http://localhost:3000/api/users/logout",
                    {},
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                toast.success(data.message);
                navigate("/login");
            } catch (error) {
                toast.error("Logout failed");
            }
        };

        logout();
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <p className="text-lg">Logging out...</p>
            </div>
        </div>
    );
};

export default Logout;
