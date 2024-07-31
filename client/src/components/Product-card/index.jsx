import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const Productcard = ({ shoeImage, shoeName, brand, pId, price }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/wishlist", {
          withCredentials: true,
        });
        const wishlistItems = response.data.wishlist;
        const isProductInWishlist = wishlistItems.some(item => item.productId === pId);
        setIsInWishlist(isProductInWishlist);
      } catch (error) {
        console.error("Error fetching wishlist", error);
      }
    };

    fetchWishlist();
  }, [pId]);

  const handleWishlistClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/wishlist", { productId: pId }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.data.success) {
        setIsInWishlist(true);
      }
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
      <Link
        to="./../product"
        state={{ shoeImage, shoeName, brand, pId, price }}
      >
        <img
          src={shoeImage}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {shoeName}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {`₹${parseInt(price * 0.9 + price * 0.2 * 0.9)}`}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                {`₹${price * 1.2}`}
              </p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
      <button
        className={`absolute top-2 right-2 w-8 h-8 rounded-full ${
          isInWishlist ? "bg-red-500" : "bg-gray-200"
        } flex items-center justify-center`}
        onClick={handleWishlistClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5 h-5 text-white"
          viewBox="0 0 16 16"
        >
          <path d="M8 15s-7-4.35-7-9.58C1 2.019 2.663 0 5 0c1.319 0 2.415.639 3 1.684C8.585.639 9.681 0 11 0c2.337 0 4 2.019 4 5.42C15 10.65 8 15 8 15z" />
        </svg>
      </button>
    </div>
  );
};

export default Productcard;
