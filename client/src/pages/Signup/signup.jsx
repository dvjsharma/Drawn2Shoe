import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Signup.css"; 

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [ppic, setPpic] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
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
        pincode.length > 0
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="signup-card">
            <div className="card-header">
              <h3 className="text-2xl font-bold mb-6">Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={registerf}>
                <div className="form-group mb-4">
                  <label htmlFor="name" className="text-gray-700 font-bold text-xl mb-2 block">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="text-gray-700 font-bold text-xl mb-2 block">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="passwd" className="text-gray-700 font-bold text-xl mb-2 block">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="passwd"
                    placeholder="Enter your password"
                    value={passwd}
                    onChange={(e) => setPasswd(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="ppic" className="text-gray-700 font-bold text-xl mb-2 block">Profile Pic URL</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="ppic"
                    placeholder="Enter your profile pic URL"
                    value={ppic}
                    onChange={(e) => setPpic(e.target.value)}
                  />
                </div>
                <div className="form-row mb-4 flex gap-4">
                  <div className="form-group flex-1">
                    <label htmlFor="street" className="text-gray-700 font-bold text-xl mb-2 block">Street</label>
                    <input
                      type="text"
                      className="form-control"
                      id="street"
                      placeholder="Enter your street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group flex-1">
                    <label htmlFor="city" className="text-gray-700 font-bold text-xl mb-2 block">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Enter your city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row mb-4 flex gap-4">
                  <div className="form-group flex-1">
                    <label htmlFor="state" className="text-gray-700 font-bold text-xl mb-2 block">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="Enter your state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group flex-1">
                    <label htmlFor="pincode" className="text-gray-700 font-bold text-xl mb-2 block">Pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pincode"
                      placeholder="Enter your pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="btn-register-container">
                  <button type="submit" className="btn-register">
                    Register
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Already have an account? <Link to="/login" className="text-white bg-green-600 px-4 py-2 rounded-md shadow-md hover:bg-green-800">Login here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
