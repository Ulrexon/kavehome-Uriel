// ProductCard.tsx

import React from 'react';
import styles from './productCardStyles.module.scss';

interface ProductCardProps {
  titulo: string;
  precio: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ titulo, precio }) => {
  return (
    <div className={styles.cardProductos}>
      <div className={styles.cuadradoEjemplo}></div> 
      <p className={styles.titulo}>{titulo}</p>
      <p className={styles.precio}>{precio} €</p>
    </div>
  );
}

export default ProductCard;
