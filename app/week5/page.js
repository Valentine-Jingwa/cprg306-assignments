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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let dogList = [
    {
      id: 1,
      name: "Sad dog",
      description: "This dog is sad",
      imageUrl: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Happy dog",
      description: "This happy dog is fluffy.",
      imageUrl: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Toque dog",
      description: "This dog is wearing a toque.",
      imageUrl: "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

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
          <div className="grid grid-cols-6 gap-6 w-full list-none">
            {groupCategories ? (
              Object.keys(groupedItems).map(category => (
                <li key={category} className="list-none">
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
