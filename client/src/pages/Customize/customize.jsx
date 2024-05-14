import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Customize = () => {
    const [formData, setFormData] = React.useState({
        desc: "",
        link: "",
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
        if (!formData.desc && !formData.link)
            return toast.error("Please fill out all the fields");
        if (!formData.desc) return toast.error("Please enter a description");
        if (!formData.link) return toast.error("Please enter a link");
        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/products/custom",
                {
                    description: formData.desc,
                    image: formData.link,
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
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">
                                        You'll Design, We'll Create!
                                    </p>
                                    <p>
                                        Please fill out all the specifications
                                    </p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label for="shoe_model">
                                                Shoe Model
                                            </label>
                                            <select
                                                name="shoe_model"
                                                id="shoe_model"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            >
                                                <option>Crocs</option>
                                                <option>Air Force 1</option>
                                                <option>Converse CDG</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-5">
                                            <label for="shoe_size">
                                                Shoe Size
                                            </label>
                                            <select
                                                name="shoe_size"
                                                id="shoe_size"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            >
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                            </select>
                                        </div>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="md:col-span-5"
                                        >
                                            <div className="md:col-span-5">
                                                <label for="design_desc">
                                                    Design Description
                                                </label>
                                                <textarea
                                                    name="desc"
                                                    id="design_desc"
                                                    rows={"4"}
                                                    className="border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder="Describe your design..."
                                                    onChange={handleChange}
                                                    value={formData.desc}
                                                ></textarea>
                                            </div>

                                            <div className="md:col-span-5">
                                                <label for="design_img">
                                                    Design Link
                                                </label>
                                                <input
                                                    type="text"
                                                    name="link"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    onChange={handleChange}
                                                    value={formData.link}
                                                />
                                            </div>

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;
