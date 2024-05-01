'use client'

import React, { useState, useEffect } from 'react';
import styles from './detailStyles.module.scss';
import { useSearchParams } from 'next/navigation';
import { obtenerProductos } from '../../services/productos.service';

const Detail: React.FC = () => {
  const [producto, setProducto] = useState<any>(null);
  const searchParams = useSearchParams();
  const search = searchParams.get('id') ?? '';

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        const productoEncontrado = productosObtenidos.find(productos => productos.productSku === search);
        if (productoEncontrado) {
          setProducto(productoEncontrado);
          console.log(productoEncontrado)
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducto();
  }, [search]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={producto.productImageUrl}
          alt={producto.productName}
          className={styles.imageResponsive}
        />
      </div>
      <div className={styles.text}>
        <div style={{paddingBottom: '20px'}}>
          <h1>{producto.productCollection}</h1>
          <p>{producto.productCategoryHierarchy}</p>
        </div>
        <div>
          <h3>{producto.productPrice}€</h3>
          <p>{producto.productName}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
