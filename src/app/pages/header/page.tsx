// components/Header.tsx

import React from 'react';
import styles from './headerStyles.module.scss';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <Link href="/">
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.iconContainer}>
        <Link href="/pages/favoritos">
          <FaRegHeart />
        </Link>
      </div>
    </header>
  );
}

export default Header;
