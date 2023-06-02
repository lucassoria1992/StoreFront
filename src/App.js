import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Header';
import FormularioCarga from './Components/Formulario';
import ProductItemsList from '../src/Conteiners/Productos.jsx';
import FormularioEdicion from './Components/FormularioEdicion';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path='/list' element={<ProductItemsList />} />
          <Route path='/formCarga' element={<FormularioCarga/>} />
          <Route path='/formEdit' element={<FormularioEdicion/>} /
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
