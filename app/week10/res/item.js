import React, { useState, useEffect } from 'react';
import Meal from '../meal-ideas';

const PEXELS_API_KEY = 'z8JF0kCyCqm9mEORaPk6UftrX7YVkC8JlSmqwz6cvtaKRGYoe6TGNjWc';
const PEXELS_API_URL = 'https://api.pexels.com/v1/search?query=';
const ANIME_API_URL = 'https://api.jikan.moe/v4/random/anime';

const Item = ({ name, quantity, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMealIdeas, setShowMealIdeas] = useState(false);
  //Anime Experiment
  const [imageSrc, setImageSrc] = useState('');
  
  
  useEffect(() => {
    fetchFoodImage(name)
      .then((imageUrl) => setImageSrc(imageUrl))
      .catch(() => fetchAnimeImage().then((imageUrl) => setImageSrc(imageUrl)));
  }, [name]);

  // Fetch food image from Pexels
  const fetchFoodImage = async (foodName) => {
    const response = await fetch(`${PEXELS_API_URL}${encodeURIComponent(foodName)}`, {
      headers: { Authorization: PEXELS_API_KEY }
    });
    const data = await response.json();
    if (data.photos.length > 0) {
      return data.photos[0].src.medium; // Return the URL of the first image
    }
    throw new Error('No image found');
  };

  // Fetch random anime image
  const fetchAnimeImage = async () => {
    const response = await fetch(ANIME_API_URL);
    const data = await response.json();
    return data.data.images.jpg.image_url; 
  };
// Return the anime image URL

  const ingredient = name.split(',')[0].trim();

  const handleAddToCart = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Hide the modal after 2 seconds
  };
  const handleDelete = () => {
    onDelete(name);
  };
  const ViewMealIdeas = () => {
    setShowMealIdeas(true);
  };
  

  return (
    <>
      <li className="bg-blue-200 hover:shadow-lg rounded-lg p-4 m-2 w-full flex flex-col items-center justify-between">
        {/* <div className="text-4xl mb-2">{image}</div> */}
        
        <div className="text-lg font-bold text-purple-600 flex justify-between pb-2">
          <p className="text-sm text-gray-600 mt-1 mr-1">Purchasing {quantity}
          </p>          
          <p>{name}</p>

        </div>
        <div className="mb-2 w-full h-8/12 overflow-hidden">
          {imageSrc && <img src={imageSrc} alt={name} className="rounded-xl" />}
        </div>               
        



        <div className="flex justify-center w-full">
          <button onClick={handleAddToCart} className="bg-gradient-to-r w-6/12 h-3/12 rounded from-purple-500 via-blue-500 to-blue-700 text-center text-white py-1 text-sm">+ Add to Cart</button>
          <button onClick={ViewMealIdeas} className="bg-gradient-to-r mr-2 ml-2 w-3/12 h-3/12 rounded from-purple-500 via-blue-500 to-blue-700 text-center text-white py-1">
        🍲  
      </button>
          <button onClick={handleDelete} className="bg-gradient-to-r w-3/12 h-3/12 rounded from-purple-500 via-blue-500 to-blue-700 text-center text-white py-1">
          
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
      {showMealIdeas && <Meal ingredient={ingredient} />} 
    </>
  );
};
export default Item;
