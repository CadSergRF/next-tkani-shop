import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { Banner } from '@/components/Banner/Banner';
import { NewProduct } from '@/components/NewProduct/NewProduct';
import { LastNews } from '@/components/LastNews/LastNews';
import Link from 'next/link';
import clsx from 'clsx';

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
          <div className={styles.main_social}>
            <h3 className={styles.main_social_title}>Мы в соцсетях:</h3>
            <Link href="" className={clsx(styles.main_social_link, styles.link_telegram)} />
            <Link href="" className={clsx(styles.main_social_link, styles.link_instaram)} />
            <Link href="" className={clsx(styles.main_social_link, styles.link_vk)} />
          </div>
        </div>
      </main>
    </>
  );
}
