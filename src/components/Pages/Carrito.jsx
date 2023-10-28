import React from 'react';
import CarritoItem from './CarritoItem';
import { useCart } from '../Context/CartComprador';
import { Link } from 'react-router-dom';
import './Carrito.css';

const Carrito = () => {
  const { cart, removerItem } = useCart();

  return (
    <div className="carrito-container">
      <h1 className="carrito-title">Carrito de Compras</h1>
      {cart.items.length > 0 ? (
        <ul className="carrito-list">
          {cart.items.map((item) => (
            <CarritoItem key={item.item.id} item={item} removerItem={removerItem} />
          ))}
        </ul>
      ) : (
        <h2 className="carrito-title">No hay ítems en el carrito</h2>
      )}
      <h3 className="carrito-total">
        <strong>Total:</strong>
        <span className="carrito-title">${cart.total.toFixed(2)}</span>
      </h3>
      <Link to="/checkOut">
        <button className="carrito-button" disabled={cart.items.length === 0}>
          Comprar
        </button>
      </Link>
    </div>
  );
};

export default Carrito;






