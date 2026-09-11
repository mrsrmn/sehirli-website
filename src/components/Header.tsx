import { A, useLocation } from '@solidjs/router';
import type { Component } from 'solid-js';

import styles from '../App.module.css';

const Header: Component = () => {
  const location = useLocation();
  // Section links are same-page anchors on the landing page and full links
  // back to it from anywhere else.
  const section = (id: string) =>
    location.pathname === '/' ? `#${id}` : `/#${id}`;

  return (
    <header class={styles.header}>
      <A href="/" class={styles.brand}>
        <span class={styles.mark} aria-hidden="true">
          <span class={`${styles.markBar} ${styles.markBarA}`} />
          <span class={`${styles.markBar} ${styles.markBarB}`} />
          <span class={`${styles.markBar} ${styles.markBarC}`} />
        </span>
        <span class={styles.brandName}>Şehirli</span>
      </A>

      <nav class={styles.nav}>
        <a class={styles.navLink} href={section('nasil')}>
          Nasıl Çalışır
        </a>
        <a class={styles.navLink} href={section('ozellikler')}>
          Özellikler
        </a>
        <a class={styles.navCta} href={section('indir')}>
          İndir
        </a>
      </nav>
    </header>
  );
};

export default Header;
