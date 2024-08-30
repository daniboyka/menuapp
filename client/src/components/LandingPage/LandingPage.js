import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../styles/hero.jpg';


const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      {/* <header className="bg-gray-800 text-white p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">Rotisería La Delicia</div>
          <div>
            <Link to="/menu" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-600 mx-2">
              Ver Menú
            </Link>
            <Link to="/order" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-600">
              Haz tu Pedido
            </Link>
          </div>
        </nav>
      </header> */}

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero})` ,backgroundSize: '100%',backgroundRepeat: 'no-repeat', }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center text-white p-8 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold mb-4">¡Bienvenidos a La Delicia!</h1>
          <p className="text-xl mb-8">Las mejores pizzas y hamburguesas de la ciudad.</p>
          <Link to="/order" className="bg-yellow-500 text-gray-800 px-6 py-3 rounded hover:bg-yellow-600">
            Haz tu Pedido
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Nuestros Productos</h2>
          <div className="flex flex-wrap justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 mx-4 w-80">
              <img src="/images/pizza.jpg" alt="Pizza" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">Pizza Suprema</h3>
                <p className="text-gray-700">Una deliciosa pizza con todos tus ingredientes favoritos.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 mx-4 w-80">
              <img src="/images/burger.jpg" alt="Burger" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">Hamburguesa Clásica</h3>
                <p className="text-gray-700">Una hamburguesa jugosa con los mejores ingredientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Rotisería La Delicia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
