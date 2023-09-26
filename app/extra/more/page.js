'use client'
import { useState } from 'react';
import Navbar from '/app/navbar';
import Item from '/app/week3/item';
import items from '/app/week3/item-list';

export default function More() {
  const links = [
    // Your links here
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.list-item');
  
    listItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.backgroundColor = "green";
      } else {
        item.style.backgroundColor = "";
      }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar links={links} />

      {/* Existing code... */}
  
      <div className="bg-gray-100 rounded-md p-4 m-2">
        <input type="text" placeholder="Search items..." onInput={handleSearch} />
      </div>
    </main>
  );
}
