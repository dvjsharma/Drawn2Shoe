import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Wishlist from "../../components/Wishlist";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [activeSection, setActiveSection] = useState("account");
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/users/me", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setUserDetails(data.user);
        setFormData(data.user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        navigate("/login");
      }
    };
   

    fetchUserProfile();
  
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const { data } = await axios.patch("http://localhost:3000/api/users/me", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setUserDetails(data.user);
      setEditMode(false);
      setSuccessMessage("Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const renderSection = () => {
    switch (activeSection) {
  
        case "account":
          return (
            <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Account Details</h3>
                <button onClick={() => setEditMode(!editMode)}>
                   <img className="w-6 mx-auto text-gray-500" src="../src/assets/user-pen.svg" alt="edit" /> 
                </button>
              </div>
              <form className="space-y-4 p-4 bg-gray-100 rounded-md shadow-md">
                <h2 className="text-lg font-bold text-gray-700 mb-4">Your Profile</h2>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="name">Name :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`block w-full pl-2 pr-2 pt-1 pb-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${editMode ? "bg-white" : "bg-gray-200 cursor-not-allowed"
                      }`}
                    readOnly={!editMode}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="email">Email :</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className={`block w-full pl-2 pr-2 pt-1 pb-1 border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed`}
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="street">Street :</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    className={`block w-full pl-2 pr-2 pt-1 pb-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${editMode ? "bg-white" : "bg-gray-200 cursor-not-allowed"
                      }`}
                    readOnly={!editMode}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="city">City :</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`block w-full pl-2 pr-2 pt-1 pb-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${editMode ? "bg-white" : "bg-gray-200 cursor-not-allowed"
                      }`}
                    readOnly={!editMode}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="state">State :</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`block w-full pl-2 pr-2 pt-1 pb-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${editMode ? "bg-white" : "bg-gray-200 cursor-not-allowed"
                      }`}
                    readOnly={!editMode}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="pincode">Pincode :</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={`block w-full pl-2 pr-2 pt-1 pb-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${editMode ? "bg-white" : "bg-gray-200 cursor-not-allowed"
                      }`}
                    readOnly={!editMode}
                  />
                </div>
                {editMode && (
                  <button
                    onClick={handleSave}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                )}
              </form>
            </div>
         );  
        
        
        
        
         case "wishlist":
          return (
            
            <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5 flex flex-col items-center">
               <h3 className="text-2xl font-bold mb-4">WishList Items</h3>
                 <Wishlist/>
            </div>
          );
        
        case "purchased-items":
          return (
            <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4">Purchased Items</h3>
              <img src="../src/assets/empty.svg" alt="Empty Purchased Items" className="my-24 w-32 " />
            </div>
          );
        
        case "payment":
          return (
            <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4">Payment Methods</h3>
              <img src="../src/assets/empty.svg" alt="Empty Payment Methods" className="w-32 my-24" />
            </div>
          );
        
      case "address":
        return (
          <div className="bg-white border border-gray-300 rounded-lg p-6 mb-5 pb-10 ">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Address Details</h3>
            <div className="bg-gray-100 p-4 rounded-md shadow-md">

              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm font-medium text-gray-700">Street:</label>
                <div className="pl-2 pr-2 pt-1 pb-1 mb-4 border border-gray-300 rounded-md">
                  <p className="text-sm text-gray-600">{userDetails.street}</p>
                </div>

              </div>
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm font-medium text-gray-700">City:</label>
                <div className="pl-2 pr-2 pt-1 pb-1 mb-4 border border-gray-300 rounded-md">
                  <p className="text-sm text-gray-600">{userDetails.city}</p>
                </div>

              </div>
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm font-medium text-gray-700">State:</label>
                <div className="pl-2 pr-2 pt-1 pb-1 mb-4 border border-gray-300 rounded-md">
                  <p className="text-sm text-gray-600">{userDetails.state}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm font-medium text-gray-700">Pincode:</label>
                <div className="pl-2 pr-2 pt-1 pb-1 mb-4 border border-gray-300 rounded-md">
                  <p className="text-sm text-gray-600">{userDetails.pincode}</p>
                </div>
              </div>
            </div>
          </div>

        );
      default:
        return null;
    }
  };

  const getButtonClass = (section) => {
    const baseClass = "w-full block py-2 px-4 rounded-full font-bold";
    const activeClass = "bg-gray-300 text-gray-800";
    const hoverClass = "hover:bg-gray-300 hover:text-gray-800";
    const inactiveClass = "bg-base-100 text-gray-800";

    return `${baseClass} ${section === activeSection ? activeClass : inactiveClass} ${hoverClass}`;
  };

  return (
    <div className="container mx-auto mt-10">
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-5">
          <div className="bg-white border border-gray-300 rounded-lg p-5">
            <img
              src={userDetails.profilepic || "../src/assets/avatar.svg"}
              alt="Profile"
              className="rounded-full w-20 mx-auto"
            />
            <h3 className="text-center text-2xl font-bold mt-5">{userDetails.name}</h3>
            <p className="text-center text-gray-600">{userDetails.email}</p>
            <div className="mt-5">
              <ul className="menu bg-base-100 w-full rounded-box">
                <li>
                  <button className={getButtonClass("account")} onClick={() => setActiveSection("account")}>Account</button>
                </li>
                <li>
                  <button className={getButtonClass("wishlist")} onClick={() => setActiveSection("wishlist")}>Wishlist</button>
                </li>
                <li>
                  <button className={getButtonClass("purchased-items")} onClick={() => setActiveSection("purchased-items")}>Purchased Items</button>
                </li>
                <li>
                  <button className={getButtonClass("payment")} onClick={() => setActiveSection("payment")}>Payment</button>
                </li>
                <li>
                  <button className={getButtonClass("address")} onClick={() => setActiveSection("address")}>Address</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-5">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
