// detail

'use client'

import React, { useState, useEffect, Suspense } from 'react';
import styles from './detailStyles.module.scss';
import { useSearchParams } from 'next/navigation';
import { obtenerProductos } from '../../services/productos.service';
import Link from 'next/link';

const DetailContent: React.FC = () => {
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
          console.log(productoEncontrado);
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
        <Link href={`/pages/image?url=${producto.productImageUrl}`}>
          <img
            src={producto.productImageUrl ?? 'https://c.media.kavehome.com/images/Products/S0900070HE12_1V01.jpg'}
            alt={producto.productName}
            className={styles.imageResponsive}
          />
        </Link>
      </div>

      <div className={styles.text}>
        <div style={{ paddingBottom: '20px' }}>
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

const Detail: React.FC = () => {
  return (
    <Suspense fallback={<div>Cargando parámetros de búsqueda...</div>}>
      <DetailContent />
    </Suspense>
  );
};

export default Detail;
