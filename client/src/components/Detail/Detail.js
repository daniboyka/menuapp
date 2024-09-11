import React from 'react';
import MenuList from '../MenuList/MenuList';

const Detail = ({ product }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={product.image} alt={product.title} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
            <h2 className="mt-1 text-3xl leading-tight font-bold text-gray-900">{product.title}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
            <div className="mt-6">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">Ingredientes</h3>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {product.ingredients && product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;