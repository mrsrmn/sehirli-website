import type { Component } from 'solid-js';

import styles from '../App.module.css';

/** The paired App Store / Google Play calls to action. */
const StoreButtons: Component<{
  iosHref: string;
  androidHref: string;
  class?: string;
}> = (props) => (
  <div class={`${styles.storeRow} ${props.class ?? ''}`}>
    <a
      class={`${styles.storeButton} ${styles.storePrimary}`}
      href={props.iosHref}
    >
      <span class={styles.storeOs}>iOS</span>
      <span class={styles.storeLabel}>App Store'dan İndir</span>
    </a>
    <a
      class={`${styles.storeButton} ${styles.storeSecondary}`}
      href={props.androidHref}
    >
      <span class={styles.storeOsAlt}>ANDROID</span>
      <span class={styles.storeLabel}>Google Play'den İndir</span>
    </a>
  </div>
);

export default StoreButtons;
