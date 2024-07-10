import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Customize.css"; // Import your CSS file

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
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div className="customize-card">
                    <div className="card-header">
                        <h3 className="text-2xl font-bold mb-0">You'll Design, We'll Create!</h3>
                        <p className="text-lg">Please fill out all the specifications</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 text-sm grid-cols-1">
                                <div className="form-group">
                                    <label htmlFor="shoe_model">Shoe Model</label>
                                    <select
                                        name="shoe_model"
                                        id="shoe_model"
                                        className="form-control"
                                    >
                                        <option>Crocs</option>
                                        <option>Air Force 1</option>
                                        <option>Converse CDG</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="shoe_size">Shoe Size</label>
                                    <select
                                        name="shoe_size"
                                        id="shoe_size"
                                        className="form-control"
                                    >
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="design_desc">Design Description</label>
                                    <textarea
                                        name="desc"
                                        id="design_desc"
                                        rows={"4"}
                                        className="form-control"
                                        placeholder="Describe your design..."
                                        onChange={handleChange}
                                        value={formData.desc}
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="design_img">Design Link</label>
                                    <input
                                        type="text"
                                        name="link"
                                        id="design_img"
                                        className="form-control"
                                        placeholder="Enter your design link..."
                                        onChange={handleChange}
                                        value={formData.link}
                                    />
                                </div>

                                <div className="form-group text-right">
                                    <button type="submit" className="btn-submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;
