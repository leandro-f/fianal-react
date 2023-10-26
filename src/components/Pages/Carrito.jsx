import React from 'react';
import CarritoItem from './CarritoItem';
import { useCart } from '../Context/CartComprador';
import { Link } from 'react-router-dom'; 

const Carrito = () => {
  const { cart, removerItem } = useCart();

  return (
    <div className="card_products">
      <div className='cont_carrito'>
        {cart.items.length > 0 ? (
          <ul>
            {cart.items.map((item) => (
              <CarritoItem key={item.item.id} item={item} removerItem={removerItem} />
            ))}
          </ul>
        ) : (
          <h1>No hay ítems en el carrito</h1>
        )}
        <h3>
          <strong>Total:</strong>
          <span>${cart.total.toFixed(2)}</span>
        </h3>
        <Link to="/checkOut"> 
          <button className="button">Comprar</button>
        </Link>
      </div>
    </div>
  );
};

export default Carrito;





