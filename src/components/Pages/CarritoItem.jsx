import React from 'react';
import './Carrito.css';

const CarritoItem = ({ item, removerItem }) => {
  const subtotal = item.quantity * item.item.precio;

  return (
    <li className="carrito-item">
      <div className="carrito-item-info">
        <h3>{item.item.nombre}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio X Unidad: ${item.item.precio.toFixed(2)}</p>
        <p className="carrito-subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
      </div>
      <button onClick={() => removerItem(item.item.id)}>Eliminar</button>
    </li>
  );
};

export default CarritoItem;




