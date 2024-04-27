import Image from "next/image";
import styles from "./page.module.css";
import HomePage from './pages/home/page';
import Header from './pages/header/page';

export default function Home() {
  return (
    <div className="home-container">
      <HomePage />
    </div>

  );
}
