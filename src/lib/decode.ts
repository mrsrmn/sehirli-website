/* Scramble-reveal text effect ported from the design's DCLogic.decode().
   Characters lock in left-to-right at one every other frame while the rest
   keep cycling through the glyph pool. */

const GLYPHS = '01<>{}[]/\\#*+=-_|$%&ÖÇŞĞÜİ01';
const FRAME_MS = 34;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Runs the effect on `el`, returning a disposer that cancels it mid-flight. */
export function decode(el: HTMLElement, text: string, delay: number) {
  const target = text.trim();
  if (!target) return () => {};

  if (prefersReducedMotion()) {
    el.textContent = target;
    return () => {};
  }

  // Hold the line's width before the reveal starts so nothing reflows.
  el.textContent = target.replace(/[^ ]/g, '·');

  let interval: ReturnType<typeof setInterval> | undefined;

  const timeout = setTimeout(() => {
    let frame = 0;
    interval = setInterval(() => {
      frame++;
      const revealed = Math.floor(frame / 2);
      let out = '';
      for (let i = 0; i < target.length; i++) {
        const ch = target[i];
        out +=
          ch === ' ' || i < revealed
            ? ch
            : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = out;
      if (revealed >= target.length) {
        clearInterval(interval);
        el.textContent = target;
      }
    }, FRAME_MS);
  }, delay);

  return () => {
    clearTimeout(timeout);
    if (interval) clearInterval(interval);
    el.textContent = target;
  };
}
