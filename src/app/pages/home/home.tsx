// home.tsx

import React from 'react';
import styles from './homeStyles.module.scss'; 

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img className={styles.homeImage} src="/images/imagenhome.png" alt="Home Image" />
      <p style={{ textAlign: 'center' }}>Inspírate</p>
    </div>    
  );
}

export default Home;
