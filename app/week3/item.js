import React from 'react';
import items from './item-list';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 rounded-md p-4 m-2 flex justify-between">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-600">Quantity: {quantity}</div>
      <div className="text-sm text-blue-500">Category: {category}</div>
    </li>
  );
};
export default Item;
