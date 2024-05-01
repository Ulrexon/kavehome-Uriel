// home

'use client'

import React, { useState, useEffect, useRef } from 'react';
import styles from './homeStyles.module.scss';
import globalStyles from '../../styles/global.module.scss';
import { obtenerProductos } from '../../services/productos.service';
import Link from 'next/link';
import ProductCard from '../../components/productCard';

const Home: React.FC = () => {

  const [productos, setProductos] = useState<any[]>([]);
  const cardListRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - cardListRef.current!.offsetLeft);
      setScrollLeft(cardListRef.current!.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - cardListRef.current!.offsetLeft;
      const walk = (x - startX) * 2;
      cardListRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    cardListRef.current!.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    cardListRef.current!.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardListRef.current!.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      cardListRef.current!.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, startX, scrollLeft]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        setProductos(productosObtenidos.slice(11, 20));
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="home-container">

      <div className={styles.divImage}>
        <img className={styles.homeImage} src="/images/imagenhome.png" alt="HomeImage" />
        <img className={styles.homeImageMobile} src="/images/imagenhomemobile.png" alt="HomeImage" />

        <div className={styles.textImage}>
          <p>Cuando la realidad supera la ficción.</p>
          <p>Trucos para estar en casa.</p>
        </div>
      </div>


      <p className={globalStyles.titulo}>Inspírate</p>

      <div className={styles.botoneraContainer}>
        <div className={styles.button1}>Estancias</div>
        <div className={styles.button1}>Estil</div>
        <div className={styles.button1}>Muebles</div>
        <div className={styles.button1}>Decoración</div>
        <div className={styles.button1}>We are Kave</div>
        <div className={styles.button1}>Proyectos</div>
      </div>

    <div ref={cardListRef} className={styles.cardListContainer}>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" onDragStart={handleDragStart} alt="img" />
          <p>We are Kave</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" onDragStart={handleDragStart} alt="img" />
          <p>Estancias</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" onDragStart={handleDragStart} alt="img" />
          <p>Muebles</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" onDragStart={handleDragStart} alt="img" />
          <p>Decoración</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" onDragStart={handleDragStart} alt="img" />
          <p>Proyectos</p>
        </div>
        <div className={styles.card}>
          <img src="/images/imagencard.jpg" onDragStart={handleDragStart} alt="img" />
          <p>Estilos</p>
        </div>
      </div>

      {productos.length > 0 ? (
        <div className={styles.cardListContainerProductos}>
          {[...Array(Math.ceil(productos.length / 3))].map((_, index) => (
            <div key={index} className={styles.productosRow}>
              {productos.slice(index * 3, index * 3 + 3).map(producto => (
                <ProductCard
                  key={producto.productSku}
                  id={producto.productSku}
                  titulo={producto.productName.substring(0, 20) + '...'}
                  precio={producto.productPrice}
                  imagen={producto.productImageUrl ?? 'https://c.media.kavehome.com/images/Products/S0900070HE12_1V01.jpg'}
                  // ponemos una imagen por defecto en el caso de que seas nula....
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando productos...</p>
      )}


      <Link href="/pages/productos">
        <button className={styles.buttonTodos}>VER TODOS LOS PRODUCTOS</button>
      </Link>

    </div>
  );
}

export default Home;
