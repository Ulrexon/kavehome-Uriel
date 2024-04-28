// ProductCard.tsx

import React from 'react';
import styles from './productCardStyles.module.scss';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  titulo: string;
  precio: number;
  imagen: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, titulo, precio, imagen }) => {
  return (
    <>
      <Link href="/pages/detail">
        <div className={styles.cardProductos}>
          <img className={styles.imagenProducto} src={imagen} alt={titulo} />
          <p className={styles.titulo}>{titulo}</p>
          <p className={styles.precio}>{precio} €</p>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
