import Image from 'next/image';
import styles from './page.module.css';
import { Header } from './components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}></div>
      </main>
    </>
  );
}
