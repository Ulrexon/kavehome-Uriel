// listado.tsx

"use client";

import React from 'react';
import globalStyles from '../../styles/global.module.scss';
import styles from './productosStyles.module.scss';
import ProductCard from '../../components/productCard';

const Listado: React.FC = () => {
  return (
    <div>
      <div>
        <p className={globalStyles.titulo}>Productos</p>
        <p className={globalStyles.subtitulo}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div style={{textAlign: 'center', paddingTop: '50px'}}>
        <div className={styles.cardListContainerProductos}>
            <ProductCard
              key={1}
              titulo={'test'}
              precio={5}
              imagen=''
            />
        </div>
      </div>
    </div>
  );
}

export default Listado;
