import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Pages/Inicio';
import Remeras from './components/Pages/Remeras';
import Llaveros from './components/Pages/Llaveros';
import Carrito from './components/Pages/Carrito';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import './App.css';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/remera/:id" element={<DetalleProducto />} />
        <Route path="/llaveros" element={<Llaveros />} />
        <Route path="/carrito" element={<Carrito />} /> 
        <Route path="/CheckOut" element={<CheckOut />} /> 
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
