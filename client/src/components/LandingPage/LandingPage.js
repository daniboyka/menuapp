import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../styles/hero.jpg';
import MenuList from '../MenuList/MenuList';

const LandingPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {!showMenu ? (
        <>
          <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto text-center text-white p-8 flex flex-col items-center justify-center h-full">
              <h1 className="text-5xl font-bold mb-4">¡Bienvenidos a La Delicia!</h1>
              <p className="text-xl mb-8">Las mejores pizzas y hamburguesas de la ciudad.</p>
              <button onClick={handleShowMenu} className="bg-yellow-500 text-gray-800 px-6 py-3 rounded hover:bg-yellow-600">
                Haz tu Pedido
              </button>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Nuestros Productos</h2>
              <div className="flex flex-wrap justify-center">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 mx-4 w-80">
                  <img src="https://files.oaiusercontent.com/file-QqH6W3mWmSAFpOKC1J6OSRIS?se=2024-09-03T23%3A55%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4164bd7f-2212-4a38-b4f9-5a5fc79ce4fd.webp&sig=gtHQkdheIw05jht4almuFJjlDWVi5UxKRX0vrZillpc%3D" alt="Pizza" className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-2">Pizza Suprema</h3>
                    <p className="text-gray-700">Una deliciosa pizza con todos tus ingredientes favoritos.</p>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 mx-4 w-80">
                  <img src="https://files.oaiusercontent.com/file-iTHoAeHDwxmznGQD2SmqmOpt?se=2024-09-03T23%3A55%3A39Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D97500789-b594-4cc6-bad2-54f4f97a689b.webp&sig=grAflGSC4LEXg8zZabGDjbLmG1wF/LuajGEGMvuwK6U%3D" alt="Burger" className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-2">Hamburguesa Clásica</h3>
                    <p className="text-gray-700">Una hamburguesa jugosa con los mejores ingredientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="container mx-auto p-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Nuestro Menú</h2>
          <MenuList />
        </div>
      )}

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Rotisería La Delicia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;