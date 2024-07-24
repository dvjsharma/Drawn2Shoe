import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import './index.css'; 

const RetailerHome = () => {
    const [formData, setFormData] = React.useState({
        shopname: "",
        contactno: "",
        shopaddr: "",
        shopcity: "",
        shoppin: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/users/retailer",
                { ...formData },
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
        }
    }

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div className="retailer-home-card">
                    <div className="card-header">
                        <p className="font-medium text-lg">Shop Onboarding!</p>
                        <p>Please fill out all the fields.</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-5 form-group">
                                    <label htmlFor="retailer_name">Shop Name</label>
                                    <input
                                        type="text"
                                        name="shopname"
                                        id="retailer_name"
                                        onChange={handleChange}
                                        value={formData.shopname}
                                        className="form-control"
                                    />
                                </div>

                                <div className="md:col-span-5 form-group">
                                    <label htmlFor="retailer_locality">Contact Number</label>
                                    <input
                                        type="number"
                                        name="contactno"
                                        id="retailer_locality"
                                        onChange={handleChange}
                                        value={formData.contactno}
                                        className="form-control"
                                    />
                                </div>

                                <div className="md:col-span-5 form-group">
                                    <label htmlFor="retailer_city">Shop Address</label>
                                    <input
                                        type="text"
                                        name="shopaddr"
                                        id="retailer_city"
                                        onChange={handleChange}
                                        value={formData.shopaddr}
                                        className="form-control"
                                    />
                                </div>

                                <div className="md:col-span-5 form-group">
                                    <label htmlFor="retailer_state">City</label>
                                    <input
                                        type="text"
                                        name="shopcity"
                                        id="retailer_state"
                                        onChange={handleChange}
                                        value={formData.shopcity}
                                        className="form-control"
                                    />
                                </div>

                                <div className="md:col-span-5 form-group">
                                    <label htmlFor="retailer_country">PIN</label>
                                    <input
                                        type="number"
                                        name="shoppin"
                                        id="retailer_country"
                                        onChange={handleChange}
                                        value={formData.shoppin}
                                        className="form-control"
                                    />
                                </div>

                                <div className="md:col-span-5 text-right">
                                    <div className="inline-flex items-end">
                                        <button className="btn-submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetailerHome;
