import React from 'react';
import styles from './detailStyles.module.scss';

const Detail: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img 
          src="/images/imagencard.jpg" 
          alt="Foto" 
          style={{ maxWidth: '100%', maxHeight: '1500px' }}
        />
      </div>
      <div className={styles.text}>
        <h1>Título</h1>
        <p>Descripción</p>
      </div>
    </div>
  );
}

export default Detail;
