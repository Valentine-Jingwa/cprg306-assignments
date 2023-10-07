import React, { useState } from 'react';
import items from '../../week3/item-list';

const Item = ({ name, quantity, image }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Hide the modal after 2 seconds
  };

  return (
    <>
      <li className="bg-blue-200 hover:shadow-lg rounded-lg p-4 m-2 w-64 flex flex-col items-center justify-between">
        <div className="text-4xl mb-2">{image}</div>
        <div className="text-lg font-semibold text-purple-600">{name}</div>
        <div className="text-sm text-gray-600 mt-2">Buy {quantity}</div>
        <div className="flex justify-center w-full">
          <button onClick={handleAddToCart} className="bg-gradient-to-r m-2 w-32 rounded from-purple-500 via-blue-500 to-blue-700 text-center text-white py-1">+ Add to Cart</button>
          <button className="bg-gradient-to-r m-2 w-10 h-10 rounded from-purple-500 via-blue-500 to-blue-700 text-center text-white py-1">
            <span role="img" aria-label="bin">🗑️</span>
          </button>
        </div>
      </li>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>{name} has been added to the cart.</p>
          </div>
        </div>
      )}
    </>
  );
};




export default Item;
