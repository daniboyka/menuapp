import React from 'react';

const CategoriaCard = ({ categoria, onClick }) => (
  <div className="card cursor-pointer" onClick={() => onClick(categoria.id)}>
    <div className="card-header">
      <h2 className="card-title">{categoria.nombre}</h2>
    </div>
    <div className="card-content">
      <img src={`/api/placeholder/${categoria.imagen}`} alt={categoria.nombre} className="w-full h-40 object-cover" />
    </div>
  </div>
);

export default CategoriaCard;