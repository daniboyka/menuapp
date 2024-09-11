import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from './actions';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import MenuList from './components/MenuList/MenuList';
import CategoriasList from './components/CategoriasList/CategoriasList';

const App = () => {
  const dispatch = useDispatch();
  const { categorias, menuItems, opciones, loading, error } = useSelector(state => state.menu);
  
  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  console.log('Estado del menú:', { categorias, menuItems, opciones, loading, error });

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu" element={
              <MenuList 
                categorias={categorias}
                menuItems={menuItems}
                opciones={opciones}
              />
            } />
            <Route path="/categorias" element={<CategoriasList categorias={categorias} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;