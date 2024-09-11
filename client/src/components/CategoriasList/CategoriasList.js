import React from 'react';
import CategoriaCard from '../CategoriaCard/CategoriaCard';

const CategoriasList = ({ categorias, onCategoriaClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {categorias.map((categoria) => (
      <CategoriaCard key={categoria.id} categoria={categoria} onClick={onCategoriaClick} />
    ))}
  </div>
);

export default CategoriasList;