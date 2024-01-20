import styles from './page.module.css';
import { Banner } from '@/components/Banner/Banner';
import { NewProduct } from '@/components/NewProduct/NewProduct';
import { LastNews } from '@/components/LastNews/LastNews';
import Link from 'next/link';
import { SocialLinks } from '@/components/SocialLinks/SocialLinks';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <NewProduct />
        <LastNews />
        <Link href="/catalog" className={styles.main_link_container}>
          Перейти в каталог
        </Link>
        <div className={styles.main_social}>
          <h3 className={styles.main_social_title}>Мы в соцсетях:</h3>
          <SocialLinks />
        </div>
        <section className={styles.main_why}>
          <article className={styles.main_why_block}>
            <h2 className={styles.main_why_block_title}>
              Интернет-магазин тканей для шитья, для дома и рукоделия &quot;Твои ткани&quot;
              приглашает за покупками.
            </h2>
            <p className={styles.main_why_block_text}>
              Ищете надежный магазин натуральных тканей с широким ассортиментом? Вы попали по
              адресу! У нас Вы найдете то, что Вам нужно.
            </p>
            <p className={styles.main_why_block_text}>
              Ищете надежный магазин натуральных тканей с широким ассортиментом? Вы попали по
              адресу! У нас Вы найдете то, что Вам нужно.
            </p>
          </article>
          <article className={styles.main_why_block}>
            <h2 className={styles.main_why_block_title}>
              Какие ткани представлены в нашем магазине?
            </h2>
            <p className={styles.main_why_block_text}>
              У нас Вы можете купить хлопковые и смесовые ткани для детей и взрослых по доступным
              ценам. Сатин, бязь, поплин, плюш, велюр и другие ткани.
            </p>
          </article>
          <article className={styles.main_why_block}>
            <h2 className={styles.main_why_block_title}>
              Почему стоит выбрать &quot;Твои ткани&quot;?
            </h2>
            <p className={styles.main_why_block_text}>
              Ищете надежный магазин натуральных тканей с широким ассортиментом? Вы попали по
              адресу! У нас Вы найдете то, что Вам нужно.
            </p>
            <p className={styles.main_why_block_text}>
              Ищете надежный магазин натуральных тканей с широким ассортиментом? Вы попали по
              адресу! У нас Вы найдете то, что Вам нужно.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
