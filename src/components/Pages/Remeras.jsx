import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import LogoCarga from '../LogoCarga/LogoCarga';
import "./pages.css"
const Remeras = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productsCollection = collection(db, 'remeras');
        const querySnapshot = await getDocs(productsCollection);
        const productsData = [];

        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() });
        });

        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar productos desde Firestore:', error);
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const displayedProducts = products.slice(2, 5);

  return (
    <main className='card_products'>
      <div>
        <h1>REMERAS DE HOEKXX</h1>
      </div>
      {isLoading ? (
        <LogoCarga />
      ) : (
        <ul>
          {displayedProducts.map((product) => (
            <li key={product.id}>
              <img src={product.imgUrl} alt={product.nombre} />
              <div className='strong'>
                <strong>{product.nombre}</strong>
              </div>
              <Link to={`/remera/${product.id}`} className='button'>
                Ver Detalle
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Remeras;


