import React from 'react';

const MenuItem = ({ item, onSelect }) => (
  <div className="card my-2 cursor-pointer" onClick={() => onSelect(item)}>
    <div className="card-content flex justify-between items-center p-4">
      <span>{item.nombre}</span>
      <span className="font-bold">${item.precio}</span>
    </div>
  </div>
);

export default MenuItem;