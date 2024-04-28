// favoritos
import React from 'react';
import globalStyles from '../../styles/global.module.scss';
import styles from './favoritosStyles.module.scss';
import ProductCard from '../../components/productCard';

const Favoritos: React.FC = () => {
  return (
    <div>
 <div>
        <p className={globalStyles.titulo}>Lista de Favoritos</p>
        <p className={globalStyles.subtitulo}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div style={{textAlign: 'center', paddingTop: '50px'}}>
        <div className={styles.cardListContainerProductos}>
            <ProductCard
              key={1}
              id='1'
              titulo={'test'}
              precio={5}
              imagen=''
            />
        </div>
      </div>
    </div>
  );
}

export default Favoritos;
