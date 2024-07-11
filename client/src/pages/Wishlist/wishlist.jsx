// src/components/Wishlist.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For generating unique keys

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist(prevWishlist => [...prevWishlist, { ...product, id: uuidv4() }]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };

  const products = [
    { id: uuidv4(), name: 'Running Shoes' },
    { id: uuidv4(), name: 'Basketball Shoes' },
    { id: uuidv4(), name: 'Casual Shoes' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Wishlist</h1>
      <div className="space-y-4">
        {products.map(product => (
          <div key={product.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <span>{product.name}</span>
            <button
              onClick={() => addToWishlist(product)}
              className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-gray-900"
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <ul>
          {wishlist.map(item => (
            <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="px-4 py-2 rounded bg-red-500 text-white"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
