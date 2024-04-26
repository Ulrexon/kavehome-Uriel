// home.tsx

import React from 'react';
import styles from './homeStyles.module.scss'; 
import { obtenerProductos } from '../../services/productos.service';

obtenerProductos()
    .then(productos => {
        // Hacer algo con los datos
        console.log(productos);
    })
    .catch(error => {
        // Manejar errores
        console.error(error);
    });

const Home: React.FC = () => {

    const productosEjemplo = [
        { id: 1, imagen: "/images/producto1.jpg", titulo: "Producto 1", precio: 20 },
        { id: 2, imagen: "/images/producto2.jpg", titulo: "Producto 2", precio: 30 },
        { id: 3, imagen: "/images/producto3.jpg", titulo: "Producto 3", precio: 25 },
        { id: 4, imagen: "/images/producto4.jpg", titulo: "Producto 4", precio: 35 },
        { id: 5, imagen: "/images/producto5.jpg", titulo: "Producto 5", precio: 40 },
        { id: 6, imagen: "/images/producto6.jpg", titulo: "Producto 6", precio: 22 },
        { id: 7, imagen: "/images/producto7.jpg", titulo: "Producto 7", precio: 28 },
        { id: 8, imagen: "/images/producto8.jpg", titulo: "Producto 8", precio: 32 },
        { id: 9, imagen: "/images/producto9.jpg", titulo: "Producto 9", precio: 18 },
      ];

  return (
    <div className="home-container">

      <img className={styles.homeImage} src="/images/imagenhome.png" alt="Home Image" />

      <h2 style={{ textAlign: 'center'}}>Inspírate</h2>

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

      <div className={styles.cardListContainerProductos}>
        {productosEjemplo.map(producto => (
          <div key={producto.id} className={styles.cardProductos}>
            <img src={producto.imagen} alt="img" />
            <p>{producto.titulo}</p>
            <p>{producto.precio} €</p>
          </div>
        ))}
      </div>

      <button className={styles.buttonTodos}>VER TODOS LOS PRODUCTOS</button>

    </div>    
  );
}

export default Home;
