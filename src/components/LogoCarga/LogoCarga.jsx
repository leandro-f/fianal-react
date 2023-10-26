import React from 'react';
import { FadeLoader } from 'react-spinners';
import "./LoogoCarga.css"

const LogoCarga = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        <FadeLoader color="#000000" height={12} loading width={5} />
      </div>
    </div>
  );
};

export default LogoCarga;
