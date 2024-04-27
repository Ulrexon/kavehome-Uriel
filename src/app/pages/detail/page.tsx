import React from 'react';
import './detailStyles.module.scss'; // Importa tu archivo CSS para estilos

const Detail: React.FC = () => {
  return (
    <div className="detail-container">
      <div>
        <img src="/images/imagencard.jpg" alt="Foto" />
      </div>
      <div>
        <h1>Título</h1>
        <p>Descripción</p>
      </div>
    </div>
  );
}

export default Detail;
