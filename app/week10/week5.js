"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Item from './res/item';
import Modal from '../week7/modal';
import defaultItemList from './res/item-list';
import dynamic from 'next/dynamic';


export default function Week5() {
  const [itemsList, setItemsList] = useState([]);  // New state for items list
  const [sortedItems, setSortedItems] = useState([]);
  const [sortedDefaultItems, setSortedDefaultItems] = useState([]);//Default item state not working
  const [sortType, setSortType] = useState('name');
  const [groupCategories, setGroupCategories] = useState(false);
  const [groupedItems, setGroupedItems] = useState({});
  const [defaultItems, setDefaultItems] = useState(defaultItemList);

  const NoSSRComponent = dynamic(() => import('./res/item'), {
    ssr: false,
  });

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
  }, [sortType, groupCategories, itemsList, defaultItems]);
  
  

return (
  <main className="bg-gray-100 flex flex-col items-center justify-between w-full ">
    <div className="container mx-auto bg-white mt-20 mb-20 p-6 rounded-lg shadow-md ">
        <div className="flex flex-col items-center justify-center w-full">

            <h1 className="text-5xl font-bold text-center mb-4">Shopping List</h1>

            <select onChange={(e) => setSortType(e.target.value)}>
                <option value="name">Name</option>
                <option value="category">Category</option>
            </select>
            <Modal onAddItem={handleAddItem} />
            <label>
                <input type="checkbox" onChange={() => setGroupCategories(!groupCategories)} />
                Group by Categories
            </label>

            {/* Here are the sortable default list items */}
            <h2 className="text-3xl font-bold text-center mb">Default items</h2>
            <div className="grid grid-cols-3 gap-12 w-full list-none">           
              {typeof window !== 'undefined' && defaultItems.map((item, index) => (
              <li className="col-span-1 list-none" key={item.name}>  {/* Use unique key */}
                 <NoSSRComponent name={item.name} quantity={item.quantity} image={item.image} onDelete={() => handleDeleteItem(item.name, true)} />
              </li>
             ))}
           </div>

            {/* Here are the Newly Generated items */}
            <h2 className="text-3xl font-bold text-center mb">Newly added items</h2>            
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
                    <Item name={item.name} quantity={item.quantity} image={item.image} onDelete={handleDeleteItem} />
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
          // <div className="grid grid-cols-3 gap-12 w-full list-none">            {typeof window !== 'undefined' && defaultItems.map((item, index) => (
          //     <li className="col-span-1 list-none" key={item.name}>  {/* Use unique key */}
          //       <NoSSRComponent name={item.name} quantity={item.quantity} image={item.image} onDelete={() => handleDeleteItem(item.name, true)} />
          //     </li>
          //   ))}
          // </div>