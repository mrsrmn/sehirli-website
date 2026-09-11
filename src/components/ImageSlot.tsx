import { Show, type Component } from 'solid-js';

import styles from '../App.module.css';

/**
 * Stands in for the design's <image-slot>. Renders the artwork when `src` is
 * set and an inert labelled placeholder until then.
 */
const ImageSlot: Component<{ label: string; src?: string }> = (props) => (
  <Show
    when={props.src}
    fallback={
      <div class={styles.slot}>
        <svg
          class={styles.slotIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <circle cx="8.5" cy="9.5" r="1.6" />
          <path d="M3 16.5l4.8-4.2a1.5 1.5 0 0 1 2 0L14 16" />
          <path d="M13 14.2l2.2-2a1.5 1.5 0 0 1 2 0L21 15.4" />
        </svg>
        <span class={styles.slotLabel}>{props.label}</span>
      </div>
    }
  >
    <img class={styles.slotImage} src={props.src} alt={props.label} />
  </Show>
);

export default ImageSlot;
