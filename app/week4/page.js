"use client"
import React, { useState } from 'react';
import Navbar from '../navbar';
import ImageDropAndSubmit from './addproduce/ImageDropAndSubmit';

const MyComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [icon, setIcon] = useState("");

  const handleSubmit = (event) => {
    // Prevent default submission behavior
    event.preventDefault();

    // Create an item object
    const item = {
      name,
      quantity,
      category,
      icon
    };

    // Log and alert the item object
    console.log(item);
    alert(`Item details:\nName: ${name} ${icon}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset state variables
    setName("");
    setQuantity(1);
    setCategory("produce");
    setIcon("");
  };
  const links = [
    { label: 'Home', url: '/' },
    { label: 'Shopping List', url: '/week3' },
    { label: 'Contact', url: './extra/contact' },
    { label: 'More', url: './extra/more' },
];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
    <Navbar links={links} />
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center">Shop</h1>
            <form onSubmit={handleSubmit} className="p-8 space-y-4 flex flex-col items-center justify-center">
                <div>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border p-2 w-80 rounded-lg"
                    placeholder="Item Name"
                    />
                </div>

                <div>
                    <input
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    required
                    className="border p-2 rounded-lg"
                    />
                                        <select
                    value={category}
                    onChange={(e) => setIcon(e.target.value)}
                    className="border p-2 ml-6 w-14 rounded-lg"
                    >
                    <option value="😋">😋</option>
                    <option value="🧀">🧀</option>
                    <option value=">🥖">🥖</option>
                    <option value="🥓">🥓</option>
                    <option value="🥶">🥶</option>
                    <option value="🥫">🥫</option>
                    <option value="🍷">🍷</option>
                    <option value="🍭">🍭</option>
                    <option value="🧹">🧹</option>
                    <option value="🧺">🧺</option>
                    {/* ...other options */}
                    </select>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 ml-4 w-40 rounded-lg"
                    >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="HouseHold">House Hold</option>
                    <option value="Other Supplies">Other Supplies</option>
                    {/* ...other options */}
                    </select>
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add +
                </button>  
            </form>
        </div>
        <div className="p-16 rounded-lg text-white">
          <ImageDropAndSubmit />
        </div>
    </div>
</main>
    
  );
};

export default MyComponent;

