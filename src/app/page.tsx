import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { Banner } from '@/components/Banner/Banner';
import { NewProduct } from '@/components/NewProduct/NewProduct';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Banner />
          <NewProduct />
        </div>
      </main>
    </>
  );
}
