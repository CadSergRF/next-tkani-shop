import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { Banner } from '@/components/Banner/Banner';
import { NewProduct } from '@/components/NewProduct/NewProduct';
import { LastNews } from '@/components/LastNews/LastNews';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Banner />
          <NewProduct />
          <LastNews />
          <Link href="/catalog" className={styles.main_link_container}>
            Перейти в каталог
          </Link>
        </div>
      </main>
    </>
  );
}
