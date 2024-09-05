// src/MenuList.js
import React from 'react';
import MenuCard from '../MenuCard/MenuCard';

const MenuList = () => {
  const menus = [
    {
      id: 1,
      title: "Milanesa con Papas Fritas",
      description: "Deliciosa milanesa de res acompañada de papas fritas doradas.",
      price: "850",
      image: "https://via.placeholder.com/400x300" // Aquí podrías usar una URL real de una imagen
    },
    {
      id: 2,
      title: "Pollo Asado",
      description: "Jugoso pollo asado al horno acompañado de ensalada fresca.",
      price: "750",
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 3,
      title: "Tarta de Verduras",
      description: "Tarta casera con una mezcla de espinacas, acelga y ricotta.",
      price: "600",
      image: "https://via.placeholder.com/400x300"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {menus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default MenuList;
