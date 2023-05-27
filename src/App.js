import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductItems from '../src/Conteiners/Productos.jsx';
import Layout from './Components/Header';
import FormularioCarga from './Components/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path='/' element={<ProductItems />} />
          <Route path='/form' element={<FormularioCarga/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
