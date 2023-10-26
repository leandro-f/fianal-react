import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../Context/CartComprador';
import Counter from '../Counter/Counter';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import LogoCarga from "../LogoCarga/LogoCarga"
import "./DetalleProducto.css"

const DetalleProducto = () => {
  const { addItem } = useCart();
  const [producto, setProducto] = useState(null);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [enCarrito, setEnCarrito] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function loadProducto() {
      try {
        const productoDoc = doc(db, 'remeras', id);
        const productoSnapshot = await getDoc(productoDoc);

        if (productoSnapshot.exists()) {
          setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() });
        } else {
          console.log('Producto no encontrado.');
        }
      } catch (error) {
        console.error('Error al cargar el producto desde Firestore:', error);
      }
    }

    loadProducto();
  }, [id]);

  const handleAgregarAlCarrito = () => {
    addItem(producto, cantidadSeleccionada);
    setEnCarrito(true);
  };

  if (!producto) {
    return <LogoCarga />;
  }
  

  return (
    <div className="detalle-producto">
      <img src={producto.imgUrl} alt={producto.nombre} />
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <Counter
  stock={producto.stock}
  initial={1}
  onAddToCart={(quantity) => setCantidadSeleccionada(quantity)}
/>

      {enCarrito ? (
        <Link to="/carrito" className='btn_terminar'>
          <button>Terminar Compra</button>
        </Link>
      ) : (
        <button onClick={handleAgregarAlCarrito}>Añadir al Carrito</button>
      )}
    </div>
  );
};

export default DetalleProducto;











