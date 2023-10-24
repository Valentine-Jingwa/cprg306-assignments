"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Item from './res/item';
import items from './res/item-list';
import Modal from '../week6/modal';

export default function week5() {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortType, setSortType] = useState('name');
  const [groupCategories, setGroupCategories] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddItem = (newItem) => {
    const newItemWithId = {
      id: items.length ? Math.max(...items.map(i => i.id)) + 1 : 1,
      ...newItem
    };
    setItems(prevItems => [...prevItems, newItemWithId]);
    setModalOpen(false);
  };

  useEffect(() => {
    const sortArray = type => {
      const types = {
        name: 'name',
        category: 'category',
      };
      const sortProperty = types[type];
      const sorted = [...items].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
  
      if (groupCategories) {
        const grouped = sorted.reduce((acc, curr) => {
          acc[curr.category] = [...(acc[curr.category] || []), curr];
          return acc;
        }, {});
        setGroupedItems(grouped);
      } else {
        setSortedItems(sorted);
      }
    };
  
    sortArray(sortType);
  }, [sortType, groupCategories]);
  

const [groupedItems, setGroupedItems] = useState({});

return (
  <main className="bg-gray-100 flex flex-col items-center justify-between w-full ">
    <div className="container mx-auto bg-white mt-20 mb-20 p-6 rounded-lg shadow-md ">
        <div className="flex flex-col items-center justify-center w-full">

            <h1 className="text-4xl font-bold text-center mb-4">Shopping List</h1>
            <select onChange={(e) => setSortType(e.target.value)}>
                <option value="name">Name</option>
                <option value="category">Category</option>
            </select>
            <Modal />
            <label>
                <input type="checkbox" onChange={() => setGroupCategories(!groupCategories)} />
                Group by Categories
            </label>
            <div className="container mx-auto">


            <h1 className="text-4xl font-bold">Featured Products</h1>

        </div>
          <div className="grid grid-cols-3 gap-12 w-full list-none">
            {groupCategories ? (
              Object.keys(groupedItems).map(category => (
                <li key={category} className="justify-between list-none">
                  <h3>{category}</h3>
                  <ul className="list-none">
                    {groupedItems[category].map((item, index) => (
                      <li className="col-span-1 list-none" key={index}>
                        <Item name={item.name} quantity={item.quantity} image={item.image} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            ) : (
              sortedItems.map((item, index) => (
                <li className="col-span-1 list-none" key={index}>
                  <Item name={item.name} quantity={item.quantity} image={item.image}/>
                </li>
              ))
            )}
          </div>

          <Link className="px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600" href="/">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
