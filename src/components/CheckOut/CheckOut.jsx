import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import { useCart } from '../Context/CartComprador';
import "./CheckOut.css"

const Checkout = () => {
  const { cart, clear } = useCart();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    items: cart.items,
  });
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderRef = await addDoc(collection(db, 'ordenes'), formData);
      setOrderId(orderRef.id);
      clear();
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='cont_compra'>
      <h1>Completa el siguiente formulario para crear tu orden</h1>
      <form onSubmit={handleSubmit} className='form_compra'>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        <button type="submit">Crear Orden</button>
      </form>
      {orderId && (
        <div>
          <h2>Orden creada con éxito</h2>
          <p>El ID de la orden es: {orderId}</p>
          <Link to="/">Regresar al inicio</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

