import { onCleanup, onMount, type Component } from 'solid-js';

import { decode } from '../lib/decode';

/** Renders `text` with the design's scramble-reveal intro. */
const Decode: Component<{ text: string; delay: number; class?: string }> = (
  props
) => {
  let el!: HTMLSpanElement;

  onMount(() => {
    const dispose = decode(el, props.text, props.delay);
    onCleanup(dispose);
  });

  // The literal text is the server/no-JS rendering; decode() takes over on mount.
  return (
    <span ref={el} class={props.class}>
      {props.text}
    </span>
  );
};

export default Decode;
