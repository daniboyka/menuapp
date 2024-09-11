import React, { useState } from 'react';
import Detail from '../Detail/Detail'; // Asegúrate de que la ruta de importación sea correcta

const MenuCard = ({ menu }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleImageClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img 
          className="w-full h-48 object-cover cursor-pointer" 
          src={menu.image} 
          alt={menu.title} 
          onClick={handleImageClick}
        />
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

      {showDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <Detail product={menu} />
            <div className="p-4 text-center">
              <button 
                onClick={handleCloseDetail}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCard;