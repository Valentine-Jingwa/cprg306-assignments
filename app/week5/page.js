"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../navbar';
import Item from './res/item';
import items from './res/item-list';
import Slider from "react-slick";

export default function Home() {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortType, setSortType] = useState('name');
  const [groupCategories, setGroupCategories] = useState(false);

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
  
  const handleClick = (e) => {
    alert(e.target.alt);
  };

  const links = [
    { label: 'Home', url: '/' },
    { label: 'Shopping List', url: '/week3' },
    { label: 'Contact', url: '/contact' },
    { label: 'More', url: './extra/more' },
];
const [groupedItems, setGroupedItems] = useState({});

return (
  <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-between p-12">
    <Navbar links={links} />
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Shopping List</h1>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
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
