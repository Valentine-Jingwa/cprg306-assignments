import React, { useState } from 'react';
import items from '../week3/item-list';
import Item from './ItemList';

export default function ItemList() {
  const [currentItems, setCurrentItems] = useState(items);

  const handleDelete = (itemName) => {
    const newItems = currentItems.filter(item => item.name !== itemName);
    setCurrentItems(newItems);
  };

  return (
    <div>
      {currentItems.map((item, index) => (
        <Item key={index} {...item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
