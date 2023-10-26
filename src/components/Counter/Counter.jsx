import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ stock, initial, onAddToCart }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      onAddToCart(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      onAddToCart(counter - 1); 
    }
  };

  return (
    <div className="counter">
      <div className="counter_1">
        <button onClick={restar}>-</button>
        <h4>{counter}</h4>
        <button onClick={sumar} disabled={counter === stock}>
          +
        </button>

      </div>
    </div>
  );
};

export default Counter;
