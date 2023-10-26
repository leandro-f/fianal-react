import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot desde "react-dom/client"
import './index.css';
import App from './App';
import CartProvider from './components/Context/CartComprador'; // Asegúrate de que CartProvider esté correctamente importado

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

