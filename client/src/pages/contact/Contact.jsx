import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"; // Ensure to import Tailwind CSS in your main stylesheet

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setLoading(false);
      alert("Thank you. We will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      handleClose();
    } catch (error) {
      setLoading(false);
      console.error(error);

      alert("Sorry, something went wrong while sending your message. Please try again later.");
    }
  };

  return (
    <div className=" bg-red-200 -mb-24 pb-8  min-h-screen flex items-center justify-center pb-16">
      <div className="w-96 bg-gray-50 p-8 rounded-lg shadow-lg relative">
        <div className="close-button absolute top-0 right-0 mt-2 mr-2" onClick={handleClose}>
          <img src="cr2.png" alt="Close" className="w-6 h-6 cursor-pointer" />
        </div>
        <p className="contact-heading text-3xl font-semibold text-gray-800 text-center mb-6">Get in touch</p>
        <div className="form-container">
          <form ref={formRef} onSubmit={handleEmailSubmit} className="form">
            <label className="form-label">
              <span className="form-label-text font-bold block text-gray-700 text-sm">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="form-input w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="form-label">
              <span className="form-label-text font-bold block text-gray-700 text-sm">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="form-input w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="form-label">
              <span className="form-label-text font-bold block text-gray-700 text-sm">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="form-textarea w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <button type="submit" className="form-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mx-auto block">
              {loading ? "Sending..." : "Send Mail"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
