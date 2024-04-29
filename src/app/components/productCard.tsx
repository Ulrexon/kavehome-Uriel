// ProductCard.tsx

import React from 'react';
import styles from './productCardStyles.module.scss';
import Link from 'next/link';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

interface ProductCardProps {
  id: string;
  titulo: string;
  precio: number;
  imagen: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, titulo, precio, imagen }) => {
  return (
    <>

      <div className={styles.cardProductos}>
        <div className={styles.corazon}>
          <FaRegHeart />
        </div>
        <Link href="/pages/detail">
          <img className={styles.imagenProducto} src={imagen} alt={titulo} />
        </Link>
        <p className={styles.titulo}>{titulo}</p>
        <p className={styles.precio}>{precio} €</p>
      </div>

    </>
  );
}

export default ProductCard;
