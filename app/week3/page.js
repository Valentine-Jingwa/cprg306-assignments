import React from 'react';
import Link from 'next/link';
import Navbar from '../navbar';
import Item from './item';
import items from './item-list'; 

export default function Home() {
  const links = [
    { label: 'Home', url: '/' },
    { label: 'Shopping List', url: '/week3' },
    { label: 'Contact', url: '/contact' },
    { label: 'More', url: '/more' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar links={links} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Shopping List</h1>
          <ul>
            <Item name={items[0].name} quantity={items[0].quantity} category={items[0].category} />
            <Item name={items[1].name} quantity={items[1].quantity} category={items[1].category} />
            <Item name={items[2].name} quantity={items[2].quantity} category={items[2].category} />
            <Item name={items[3].name} quantity={items[3].quantity} category={items[3].category} />
            <Item name={items[4].name} quantity={items[4].quantity} category={items[4].category} />
            <Item name={items[5].name} quantity={items[5].quantity} category={items[5].category} />
            <Item name={items[6].name} quantity={items[6].quantity} category={items[6].category} />
            <Item name={items[7].name} quantity={items[7].quantity} category={items[7].category} />
            <Item name={items[8].name} quantity={items[8].quantity} category={items[8].category} />
            <Item name={items[9].name} quantity={items[9].quantity} category={items[9].category} />
            <Item name={items[10].name} quantity={items[10].quantity} category={items[10].category} />
            <Item name={items[11].name} quantity={items[11].quantity} category={items[11].category} />
          </ul>
        <Link className="px-6 py-2 rounded-lg hover:bg-gray-200 hover:shadow-md text-blue-500 hover:text-red-300"href="/">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}

