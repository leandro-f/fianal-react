import "./pages.css"
import React from 'react';

const CarritoItem = ({ item, removerItem }) => {
 return (
    <li className="carrito-item">
      <img className="carrito-item-img" src={item.item.imgUrl} alt={item.item.nombre} />
      <div className="carrito-item-info">
        <h3>{item.item.nombre}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio X Unidad: ${item.item.precio.toFixed(2)}</p>
        <button onClick={() => removerItem(item.item.id)}>Eliminar</button>
      </div>
    </li>
 );
};

export default CarritoItem;
