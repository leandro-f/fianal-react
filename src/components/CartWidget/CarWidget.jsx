import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartComprador';

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <Link to="/carrito" className="carrito">
      <div className="cart-icon">
        <img src="/carrito.svg" alt="cart-widget" />
        <span>{cart.items.reduce((total, item) => total + item.quantity, 0)}</span>
      </div>
    </Link>
  );
};

export default CartWidget;





    