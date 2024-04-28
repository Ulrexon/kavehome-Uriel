'use client'

import React, { useState, useEffect } from 'react';
import globalStyles from '../../styles/global.module.scss';
import styles from './productosStyles.module.scss';
import ProductCard from '../../components/productCard';
import { obtenerProductos } from '../../services/productos.service';

const Listado: React.FC = () => {
  const [productos, setProductos] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const pageRange = 5;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        setProductos(productosObtenidos);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  const totalPages = Math.ceil(productos.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  const setPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(totalPages, startPage + pageRange - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div>
      <div>
        <p className={globalStyles.titulo}>Productos</p>
        <p className={globalStyles.subtitulo}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        {productos.length > 0 ? (
          <div className={styles.cardListContainerProductos}>
            {currentProducts.map(producto => (
              <ProductCard
                key={producto.productSku}
                titulo={producto.productName.substring(0, 20) + '...'}
                precio={producto.productPrice}
                imagen={producto.productImageUrl}
              />
            ))}
          </div>
        ) : (
          <p>Cargando productos...</p>
        )}
        <div className={styles.pagination}>
          {/* Barra de paginación */}
          <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
          </button>
          {getPageNumbers().map(number => (
            <button key={number} onClick={() => setPage(number)} className={currentPage === number ? styles.active : undefined}>
              {number}
            </button>
          ))}
          <button onClick={() => setPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default Listado;
