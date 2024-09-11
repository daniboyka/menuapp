import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import OpcionesSelect from '../OpcionesSelect/OpcionesSelect';

const MenuList = ({ categorias, menuItems, opciones }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [itemSeleccionado, setItemSeleccionado] = useState(null);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleCategoriaClick = (categoriaId) => {
    setCategoriaSeleccionada(categoriaId);
    setItemSeleccionado(null);
    setOpcionSeleccionada(null);
  };

  const handleItemSelect = (item) => {
    setItemSeleccionado(item);
    setOpcionSeleccionada(null);
  };

  const handleOpcionSelect = (opcionId) => {
    setOpcionSeleccionada(opciones.find(o => o.id.toString() === opcionId));
  };

  const calcularTotal = () => {
    let total = itemSeleccionado ? itemSeleccionado.precio : 0;
    if (opcionSeleccionada) total += opcionSeleccionada.precio;
    return total;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Nuestro Menú</h1>
      {!categoriaSeleccionada ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categorias.map((categoria) => (
            <div key={categoria.id} onClick={() => handleCategoriaClick(categoria.id)} className="cursor-pointer">
              <h2>{categoria.nombre}</h2>
              <img src={categoria.imagen} alt={categoria.nombre} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setCategoriaSeleccionada(null)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
            Volver a Categorías
          </button>
          <h2 className="text-2xl font-bold mb-4">{categorias.find(c => c.id === categoriaSeleccionada).nombre}</h2>
          <div className="space-y-2">
            {menuItems[categoriaSeleccionada].map((item) => (
              <MenuItem key={item.id} item={item} onSelect={handleItemSelect} />
            ))}
          </div>
          
          {itemSeleccionado && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Opciones adicionales</h3>
              <OpcionesSelect opciones={opciones} onSelect={handleOpcionSelect} />
              
              <div className="mt-4">
                <p className="text-lg">Total: ${calcularTotal()}</p>
                <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
                  Agregar al pedido
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuList;