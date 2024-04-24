import Image from "next/image";
import styles from "./page.module.css";
import HomePage from './pages/home/home';
import Header from './pages/header/header';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <HomePage />
    </div>

  );
}
