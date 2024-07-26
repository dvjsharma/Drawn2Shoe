import React, { useEffect, useState } from "react";
import axios from "axios";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/wishlist", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setWishlist(response.data.wishlist);
      } catch (error) {
        console.error("Error fetching wishlist", error);
      }
    };

    fetchWishlist();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wishlist.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
   
      <div className="grid grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-white rounded-md shadow-md p-8">
            <img
              className="w-40 h-40  rounded-md"
              src={item.product.shoe.shoeImage}
              alt={item.product.name}
            />
            <div className=" px-4 py-3 justify-center">
              <h3 className="text-lg font-bold text-black truncate block capitalize">{item.product.shoe.shoename}</h3>
             <div className="flex items-center"> 
                <p className="text-lg font-semibold text-black cursor-auto my-3">₹ {item.product.shoe.price}</p>
                <del>
                 <p className="text-sm text-gray-600 cursor-auto ml-2">
                {`₹${item.product.shoe.price * 1.2}`}
                </p>
                </del>
             </div>
              
            </div>
          </div>
        ))}
      </div>
      <div className="btn-group pt-12 px-64">
        <button
          className="btn btn-sm btn-outline btn-prev"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: Math.ceil(wishlist.length / itemsPerPage) }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`btn btn-sm ${currentPage === pageNumber ? "btn-active" : ""}`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className="btn btn-sm btn-outline btn-next"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(wishlist.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Wishlist;