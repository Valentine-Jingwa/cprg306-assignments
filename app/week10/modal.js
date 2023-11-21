"use client"
import React, { useState } from 'react';

const Modal = ({ onAddItem}) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {
          name,
          quantity,
          category,
          image,
        };

        // Replaced alert with onAddItem
        if (onAddItem) {
            onAddItem(item);
        }

        console.log(item);
    
        setName("");
        setQuantity(1);
        setCategory("produce");
        setImage("");
    };

    return(
    <>
    <button className="px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={() => setModalVisible(true)}>Add New Item</button>
    {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto">
                <div className="flex justify-end">
                    <button onClick={() => setModalVisible(false)} className="text-gray-600 hover:text-gray-900">
                        <span className="text-2xl">×</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-lg" htmlFor="name">Item Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border p-2 rounded-lg"
                            placeholder="Item Name"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col w-1/3">
                            <label className="text-gray-700 text-lg" htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                min="1"
                                max="99"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                required
                                className="border p-2 rounded-lg"
                            />
                        </div>

                        <div className="w-1/3">
                            <label className="text-gray-700 text-lg" htmlFor="image">image</label>
                            <select
                                id="image"
                                value={category}
                                onChange={(e) => setImage(e.target.value)}
                                className="border p-2 w-full rounded-lg"
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
                            </select>
                        </div>

                        <div className="w-1/3">
                            <label className="text-gray-700 text-lg" htmlFor="category">Category</label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="border p-2 w-full rounded-lg"
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
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add +
                    </button>
                </form>
            </div>
        </div>
    
    )}
    </>
    );
}
export default Modal;