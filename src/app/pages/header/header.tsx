// components/Header.tsx

import React from 'react';
import styles from './headerStyles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images/Logo_kaveHome.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.iconContainer}>
        {/* <img src="/images/heart.png" alt="Heart" className={styles.heartIcon} /> */}
        X
      </div>
    </header>
  );
}

export default Header;
