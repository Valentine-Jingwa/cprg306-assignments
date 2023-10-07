import React, { useState } from 'react';
import items from './itemData';


export default function Sort() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    // Perform any other action based on the selected value
    console.log(`Selected Category: ${selectedValue}`);
  };

  return (
    <div className="flex items-center justify-center">
      <button className="bg-blue-500 hover:bg-blue-300 rounded-md p-4 m-2 mt-6 mb-6">Name</button>
      <button className="bg-blue-500 hover:bg-blue-300 rounded-md p-4 m-2 mt-6 mb-6">Category</button>
      <select
        className="rounded-md hover:bg-blue-300 bg-blue-500 p-4 m-2 mt-6 mb-6"
        name="category"
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="bakery">Bakery</option>
        <option value="pantry">Pantry</option>
      </select>
    </div>
  );
}
