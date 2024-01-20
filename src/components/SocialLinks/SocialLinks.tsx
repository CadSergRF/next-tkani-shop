import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './SocialLinks.module.css';
import Image from 'next/image';

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <nav className={styles.social_links}>
      <Link href="" className={clsx(styles.social_link, styles.social_link_telegram)}>
        {/* <Image width={42} height={42} src="/images/2_1.svg" alt="jfjnvkdf" /> */}
      </Link>
      <Link href="" className={clsx(styles.social_link, styles.social_link_instagram)} />
      <Link href="" className={clsx(styles.social_link, styles.social_link_vk)} />
    </nav>
  );
};

export { SocialLinks };
