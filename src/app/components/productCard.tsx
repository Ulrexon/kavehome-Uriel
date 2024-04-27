// ProductCard.tsx

import React from 'react';
import styles from './productCardStyles.module.scss';
import Link from 'next/link';

interface ProductCardProps {
  titulo: string;
  precio: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ titulo, precio }) => {
  return (
    <>
      <Link href="/pages/detail">
        <div className={styles.cardProductos}>
          <div className={styles.cuadradoEjemplo}></div>
          <p className={styles.titulo}>{titulo}</p>
          <p className={styles.precio}>{precio} €</p>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
