import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const Product = () => {
    const { shoeImage, shoeName, brand, pId, price } = useLocation().state;

    const [formData, setFormData] = React.useState();

    function handleChange(event) {
        setFormData(parseInt(event.target.innerText));
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/cart/add",
                {
                    pId,
                    price,
                    size: formData,
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
        <div className="bg-gray-100 darkk:bg-gray-800 py-8 min-h-[100vh] flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 darkk:bg-gray-700 mb-4">
                            <img
                                className="w-full h-full object-cover"
                                src={shoeImage}
                                alt="Product Image"
                            />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4 flex flex-col">
                        <h2 className="text-2xl font-bold uppercase text-gray-800 darkk:text-white">
                            {shoeName}
                        </h2>
                        <span className="text-gray-500 font-bold ml-[180px] mb-2">
                            ~by {brand}
                        </span>

                        <div className="mr-4">
                            <span className="font-bold text-gray-700 darkk:text-gray-300">
                                {`Suppiler Price:  `}
                            </span>
                            <span className="text-gray-600 darkk:text-gray-300">
                                ₹{parseInt(price)}
                            </span>
                            <br />
                            <br />
                            <span className="font-bold text-gray-700 darkk:text-gray-300">
                                {`Discount applied:  `}
                            </span>
                            <span className="text-gray-600 darkk:text-gray-300">
                                ₹{parseInt(price * 0.1)}
                            </span>
                            <br />
                            <br />
                            <span className="font-bold text-gray-700 darkk:text-gray-300">
                                {`Service Charge:  `}
                            </span>
                            <span className="text-gray-600 darkk:text-gray-300">
                                ₹{parseInt(price * 0.2)}
                            </span>
                            <span className="font-bold text-gray-700 darkk:text-gray-300">
                                <br />
                                <br />
                                {`Final Price:  `}
                            </span>
                            <span className="text-gray-600 darkk:text-gray-300">
                                ₹{parseInt(price * 0.9 + price * 0.2 * 0.9)}
                            </span>
                        </div>
                        <div>
                            <br />
                            <span className="font-bold text-gray-700 darkk:text-gray-300">
                                {`Availability: `}
                            </span>
                            <span className="text-gray-600 darkk:text-gray-300">
                                In Stock
                            </span>
                        </div>
                        <br />
                        <span className="font-bold text-gray-700 darkk:text-gray-300">
                            Select Size:
                        </span>
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center mt-2 mb-5">
                                <button
                                    type="button"
                                    className="bg-gray-300 darkk:bg-gray-700 text-gray-700 darkk:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 darkk:hover:bg-gray-600"
                                    name="size"
                                    onClick={handleChange}
                                >
                                    7
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 darkk:bg-gray-700 text-gray-700 darkk:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 darkk:hover:bg-gray-600 "
                                    name="size"
                                    onClick={handleChange}
                                >
                                    8
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 darkk:bg-gray-700 text-gray-700 darkk:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 darkk:hover:bg-gray-600"
                                    name="size"
                                    onClick={handleChange}
                                >
                                    9
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 darkk:bg-gray-700 text-gray-700 darkk:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 darkk:hover:bg-gray-600"
                                    name="size"
                                    onClick={handleChange}
                                >
                                    10
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 darkk:bg-gray-700 text-gray-700 darkk:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 darkk:hover:bg-gray-600"
                                    name="size"
                                    onClick={handleChange}
                                >
                                    11
                                </button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-900 darkk:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 darkk:hover:bg-gray-700 ">
                                    Add to Cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
