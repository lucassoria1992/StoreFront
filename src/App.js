import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Header';
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
