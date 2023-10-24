'use client'
import React from 'react';
import Link from 'next/link';
import Navbar from '../navbar';
import Item from './item';
import items from './item-list'; 

export default function Home() {
    // const [searchTerm, setSearchTerm] = useState("");
    const links = [
        { label: 'Home', url: '/' },
        { label: 'Shopping List', url: '/week3' },
        { label: 'Contact', url: '/contact' },
        { label: 'More', url: './extra/more' },
    ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar links={links} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Shopping List</h1>
          <ul>
            {items.map((item, index) => (
              <Item 
                key={index}
                name={item.name} 
                quantity={item.quantity} 
                category={item.category} 
              />
            ))}
          </ul>
        <Link className="px-6 py-2 rounded-lg hover:bg-gray-200 hover:shadow-md text-blue-500 hover:text-red-300"href="/">Back to Home</Link>
        </div>
        <div className="bg-gray-100 rounded-md p-4 m-2 ">
            <select className="bg-gray-100 rounded-md w-64 m-0" name="category" id="category">
                <option value="all">All</option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="meat">Meat</option>
                <option value="bakery">Bakery</option>
                <option value="pantry">Pantry</option>
            </select>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link href="/">GO Back</Link>
      </button>
    </main>
  );
}

