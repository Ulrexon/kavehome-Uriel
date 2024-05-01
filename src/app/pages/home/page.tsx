// home

'use client'

import React, { useState, useEffect } from 'react';
import styles from './homeStyles.module.scss';
import globalStyles from '../../styles/global.module.scss';
import { obtenerProductos } from '../../services/productos.service';
import Link from 'next/link';
import ProductCard from '../../components/productCard';

const Home: React.FC = () => {

  const [productos, setProductos] = useState<any[]>([]);

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

      {productos.length > 0 ? (
        <div className={styles.cardListContainerProductos}>
          {productos.map(producto => (
            <ProductCard
              key={producto.productSku}
              id={producto.productSku}
              titulo={producto.productName.substring(0, 20) + '...'}
              precio={producto.productPrice}
              imagen={producto.productImageUrl}
            />
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
