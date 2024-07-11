import React from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Retailer_home = () => {
    const [formData, setFormData] = React.useState({
        shopname: "",
        contactno: "",
        shopaddr: "",
        shopcity: "",
        shoppin: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/users/retailer",
                {
                    ...formData,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast(data.message);
            window.location.href = "/";
        } catch (error) {
            toast.error(error.response.data.message);
            // console.error(error);
        }
    }
    return (
        <div>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <div className="bg-white rounded-[20px] shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">
                                        Shop Onboarding!
                                    </p>
                                    <p>Please fill out all the fields.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label for="retailer_name">
                                                    Shop Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="shopname"
                                                    id="retailer_name"
                                                    onChange={handleChange}
                                                    value={formData.shopname}
                                                    className="h-10 border mt-1 rounded w-full bg-gray-50 "
                                                />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label for="retailer_locality">
                                                    Contact Number
                                                </label>
                                                <input
                                                    type="number"
                                                    name="contactno"
                                                    id="retailer_locality"
                                                    onChange={handleChange}
                                                    value={formData.contactno}
                                                    className="h-10 border mt-1 rounded w-full bg-gray-50 "
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label for="retailer_city">
                                                    Shop Address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="shopaddr"
                                                    id="retailer_city"
                                                    onChange={handleChange}
                                                    value={formData.shopaddr}
                                                    className="h-10 border mt-1 rounded w-full bg-gray-50 "
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label for="retailer_state">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="shopcity"
                                                    id="retailer_state"
                                                    onChange={handleChange}
                                                    value={formData.shopcity}
                                                    className="h-10 border mt-1 rounded w-full bg-gray-50 "
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label for="retailer_country">
                                                    PIN
                                                </label>
                                                <input
                                                    type="number"
                                                    name="shoppin"
                                                    id="retailer_country"
                                                    onChange={handleChange}
                                                    value={formData.shoppin}
                                                    className="h-10 border mt-1 rounded w-full bg-gray-50 "
                                                />
                                            </div>

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Retailer_home;
