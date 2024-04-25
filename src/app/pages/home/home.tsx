// home.tsx

import React from 'react';
import styles from './homeStyles.module.scss'; 

const Home: React.FC = () => {
  return (
    <div className="home-container">

      <img className={styles.homeImage} src="/images/imagenhome.png" alt="Home Image" />

      <h2 style={{ textAlign: 'center'}}>Inspírate</h2>

      <div className={styles.botoneraContainer}>
        <div className={styles.button1}>Estancias</div>
        <div className={styles.button1}>Estil</div>
        <div className={styles.button1}>Muebles</div>
        <div className={styles.button1}>Decoración</div>
        <div className={styles.button1}>We are Kave</div>
        <div className={styles.button1}>Proyectos</div>
      </div>

      <div className={styles.cardListContainer}>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" alt="img" />
          <p>We are Kave</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" alt="img" />
          <p>Estancias</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" alt="img" />
          <p>Muebles</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" alt="img" />
          <p>Decoración</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" alt="img" />
          <p>Proyectos</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" alt="img" />
          <p>Estilos</p>
        </div>
      </div>

    </div>    
  );
}

export default Home;
