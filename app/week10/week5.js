"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Item from './res/item';
import Modal from '../week10/modal';
import dynamic from 'next/dynamic';


export default function Week5() {
  const [itemsList, setItemsList] = useState([]);  // New state for items list
  const [sortedItems, setSortedItems] = useState([]);
  const [sortType, setSortType] = useState('name');
  const [groupCategories, setGroupCategories] = useState(false);
  const [groupedItems, setGroupedItems] = useState({});


  const handleAddItem = (newItem) => {
    setItemsList(prevItems => [...prevItems, newItem]);
  };

  const handleDeleteItem = (itemName, isDefault = false) => {
    let targetStateSetter = isDefault ? setDefaultItems : setItemsList;
    let targetState = isDefault ? defaultItems : itemsList;
    const newItems = targetState.filter(item => item.name !== itemName);
    targetStateSetter(newItems);
  };

  useEffect(() => {
    const sortArray = (type) => {
      const sorted = [...itemsList].sort((a, b) => a[type].localeCompare(b[type]));
      setSortedItems(sorted);
  
      if (groupCategories) {
        const grouped = sorted.reduce((acc, curr) => {
          acc[curr.category] = [...(acc[curr.category] || []), curr];
          return acc;
        }, {});
        setGroupedItems(grouped);
      }
    };

    sortArray(sortType);
  }, [sortType, groupCategories, itemsList]);
  
  

return (
  <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen py-10">
  <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg max-w-4xl">
    <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Shopping List</h1>

    <div className="mb-4 flex justify-between items-center">
      <select className="p-2 border border-gray-300 rounded-md" onChange={(e) => setSortType(e.target.value)}>
        <option value="name">Name</option>
        <option value="category">Category</option>
      </select>
      <Modal onAddItem={handleAddItem} />
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" onChange={() => setGroupCategories(!groupCategories)} />
        Group by Categories
      </label>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groupCategories ? (
        Object.keys(groupedItems).map(category => (
          <div key={category} className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-3">{category}</h3>
            <ul>
              {groupedItems[category].map((item, index) => (
                <li key={index} className='list-none'>
                  <Item name={item.name} quantity={item.quantity} image={item.image} onDelete={handleDeleteItem} />
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        sortedItems.map((item, index) => (
          <li key={index} className="bg-gray-50 p-4 rounded-lg list-none shadow">
            <Item name={item.name} quantity={item.quantity} image={item.image} onDelete={handleDeleteItem} />
          </li>
        ))
      )}
    </div>

    <Link href="/"className="inline-block px-6 py-2 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Back to Home
    </Link>
  </div>
</main>
  );
}