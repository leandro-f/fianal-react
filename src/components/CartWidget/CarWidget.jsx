import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartComprador';

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <Link to="/carrito" className="carrito">
      <div className="cart-icon">
        <img src="/imagenes/carrito.svg" alt="cart-widget" />
        <span className='contador'>{cart.items.reduce((total, item) => total + item.quantity, 0)}</span>
      </div>
    </Link>
  );
};

export default CartWidget;





    