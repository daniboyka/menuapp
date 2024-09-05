// src/MenuCard.js
import React from 'react';


const MenuCard = ({ menu }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={menu.image} alt={menu.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{menu.title}</div>
        <p className="text-gray-700 text-base">
          {menu.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${menu.price}
        </span>
      </div>
    </div>
  );
};

export default MenuCard;
