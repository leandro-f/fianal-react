import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CarWidget';

const NavBar = () => {
  return (
    <header>
      
      <nav>
        <img src='/imagenes/logo.png'></img>
      
        <ul>
          <li><Link to="/" className='link'>INICIO</Link></li>
          <li><Link to="/remeras" className='link'>REMERAS</Link></li>
          <li><Link to="/llaveros" className='link'>LLAVEROS</Link></li>
        </ul>
      </nav>
      <div className='cartwidget'>

      <CartWidget/>
      </div>
    </header>
  );
}

export default NavBar;
