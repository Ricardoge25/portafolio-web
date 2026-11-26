import { useEffect, useState } from "react";

// Ritmo del streaming definido en el diseño: 4 caracteres cada 28 ms
const CHARS_PER_TICK = 1;
const TICK_MS = 24;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Revela `text` poco a poco, como si el "modelo" lo escribiera.
 * - `animate = false` o `prefers-reduced-motion`: el texto aparece completo.
 * - Para reiniciar con el otro texto, monta el componente de nuevo (use `key`).
 */
export function useStreamedText(text, animate = true) {
  const [count, setCount] = useState(() => 
    animate && !prefersReducedMotion() ? 0 : text.length
  );
  const done = count >= text.length;

  useEffect(() => {
    if (done) return;

    const id = setInterval(() => {
      setCount((current) => Math.min(current + CHARS_PER_TICK, text.length));
    }, TICK_MS);

    return () => clearInterval(id);
  }, [done, text.length]);

  return { visibleText: text.slice(0, count), done};
}