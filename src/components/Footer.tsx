import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

import styles from '../App.module.css';

const Footer: Component = () => (
  <footer class={styles.footer}>
    <div class={styles.footerLinks}>
      <A class={styles.footerLink} href="/ulas">
        Bize Ulaşın
      </A>
      <A class={styles.footerLink} href="/sozlesme">
        Kullanıcı Sözleşmesi
      </A>
      <A class={styles.footerLink} href="/sozlesme#gizlilik">
        Gizlilik
      </A>
    </div>
    <div>© 2026 DUNA YAZILIM DANIŞMANLIK LİMİTED ŞİRKETİ</div>
  </footer>
);

export default Footer;
