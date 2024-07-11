import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
const Designer_home = () => {
    const [formData, setFormData] = React.useState({
        Portfolio: "",
        message: "",
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
                "http://localhost:3000/api/users/designer",
                {
                    description: formData.message,
                    portfoliolink: formData.Portfolio,
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
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center bg-white">
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="text-5xl font-serif font-800">
                                    Wassup! <br /> Let's get in touch
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="First Name"
                                />
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="my-4 gap-3 flex flex-col">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Portfolio link"
                                    onChange={handleChange}
                                    name="Portfolio"
                                    value={formData.Portfolio}
                                />

                                <textarea
                                    placeholder="Tell us about yourself"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    onChange={handleChange}
                                    name="message"
                                    value={formData.message}
                                ></textarea>
                            </div>
                            <div className="my-2 w-1/2 lg:w-1/4">
                                <button
                                    className="text-sm tracking-wide bg-black text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="font-serif w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-black rounded-2xl">
                        <div className="flex flex-col text-white">
                            <h1 className="text-4xl my-4">
                                Drop in our office
                            </h1>
                            <p className="text-gray-400">
                                We would love to have you drop by our office!
                                Your presence and energy would truly brighten up
                                our day. Looking forward to seeing you soon!
                            </p>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Main Office</h2>
                                    <p className="text-gray-400">
                                        B-401, Hall of Residance 4, IIITDMJ PIN-
                                        482005
                                    </p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">
                                        Tel: xxxxx-xxxxx
                                    </p>
                                    <p className="text-gray-400">
                                        Fax: xxxxx-xxxxx
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designer_home;
