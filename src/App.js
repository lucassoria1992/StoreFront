import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductItems from '../src/Conteiners/Productos.jsx';
import Layout from './Components/Header';
import CanvasForm from './Components/canvasform';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path='/' element={<ProductItems />} />
          <Route path='/form' element={<CanvasForm/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
