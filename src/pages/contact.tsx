import type { Component } from 'solid-js';

import styles from '../App.module.css';

const Contact: Component = () => (
  <div class={styles.doc}>
    <h1 class={styles.docTitle}>Bize Ulaşın</h1>
    <p class={styles.docMeta}>İLETİŞİM</p>
    <div class={styles.docBody}>
      <p class={styles.docLead}>
        Soruların, geri bildirimlerin ve iş birliği önerilerin için:{' '}
        <a href="mailto:sehirliapp@gmail.com">sehirliapp@gmail.com</a>
      </p>
    </div>
  </div>
);

export default Contact;
