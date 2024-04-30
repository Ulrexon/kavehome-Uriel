// ProductCard.tsx
'use client'

import React, { useState, useEffect } from 'react';
import styles from './productCardStyles.module.scss';
import Link from 'next/link';
import { FaRegHeart, FaHeart } from "react-icons/fa6";

interface ProductCardProps {
  id: string;
  titulo: string;
  precio: number;
  imagen: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, titulo, precio, imagen }) => {

  const [favorito, setFavorito] = useState(false);

  const handleFavoriteToggle = () => {
    const favoritosGuardados = JSON.parse(sessionStorage.getItem('favoritos') || '[]');
    const nuevosFavoritos = favoritosGuardados.includes(id)
      ? favoritosGuardados.filter((fav: string) => fav !== id)
      : [...favoritosGuardados, id];
    setFavorito(!favorito);
    sessionStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  useEffect(() => {
    const favoritosGuardados = JSON.parse(sessionStorage.getItem('favoritos') || '[]');
    setFavorito(favoritosGuardados.includes(id));
  }, [id]);

  return (
    <>
      <div className={styles.cardProductos}>
        <div className={styles.corazon} onClick={handleFavoriteToggle}>
          {favorito ? <FaHeart /> : <FaRegHeart />}
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
