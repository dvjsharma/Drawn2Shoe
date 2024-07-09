import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./Signup.css"; // Import the custom CSS file for additional styles

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
          <div className="card signup-card shadow-lg border-light">
            <div className="card-header text-center bg-primary text-white rounded-top">
              <h3>Register</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={registerf}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
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
                <div className="form-group">
                  <label htmlFor="email">Email</label>
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
                <div className="form-group">
                  <label htmlFor="passwd">Password</label>
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
                <div className="form-group">
                  <label htmlFor="ppic">Profile Pic URL</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="ppic"
                    placeholder="Enter your profile pic URL"
                    value={ppic}
                    onChange={(e) => setPpic(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="street">Street</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="street"
                      placeholder="Enter your street address"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="city"
                      placeholder="Enter your city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="state"
                      placeholder="Enter your state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="pincode"
                      placeholder="Enter your pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-3"
                >
                  Register
                </button>
              </form>
              <hr />
              <div className="text-center">
                <p>
                  Already a member?{" "}
                  <Link to="/login" className="btn btn-link">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;