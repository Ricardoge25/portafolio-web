import { useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { SIZES, createSphere } from "../utils/asciiSphere";

// Un fotograma nuevo cada 70 ms (~14 por segundo)
const FRAME_MS = 70;
// Fotograma que se muestra quieto con prefers-reduced-motion
const STILL_TICK = 12;
// Cuánto tiempo la esfera "recuerda" el último movimiento del cursor
const POINTER_MEMORY_MS = 3000;
// Hasta dónde puede llegar su mirada (1 = borde de la esfera)
const MAX_GAZE = 1.1;

const FONT_CLASS = { large: "text-[13px]", compact: "text-[16px]" };
function LiveSphere({ size, speaking, className }) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  // createSphere devuelve la función que dibuja un fotograma
  const renderFrame = useMemo(() => createSphere(SIZES[size]), [size]);
  const [frame, setFrame] = useState(() => renderFrame({ tick: 0 }));
  const [inView, setInView] = useState(true);

  const ref = useRef(null);
  const speakingRef = useRef(speaking);
  const pointerRef = useRef(null);
  // Estado de la animación: vive en una ref para que no se reinicie al pausar
  const animRef = useRef({
    tick: 0,
    energy: 0,
    fx: 0,
    fy: 0,
    pokeTick: -9999,
  });

  useEffect(() => {
    speakingRef.current = speaking;
  }, [speaking]);

  // Solo se anima mientras la esfera está en pantalla (ahorra CPU y batería)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const running = inView && !reducedMotion;

  // Cursor (o dedo) y clics: la esfera los lee en cada fotograma
  useEffect(() => {
    if (!running) return;
    const onMove = (event) => {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        at: performance.now(),
      };
    };
    const onDown = () => {
      animRef.current.pokeTick = animRef.current.tick;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [running]);

  // Bucle de animación
  useEffect(() => {
    if (!running) return;
    const { cols, rows, rx, ry } = SIZES[size];

    const id = setInterval(() => {
      const anim = animRef.current;
      anim.tick += 1;

      // Energía: sube al "hablar" y baja al terminar, siempre con suavidad
      anim.energy += ((speakingRef.current ? 1 : 0) - anim.energy) * 0.1;

      // Mirada: el punto del cursor, convertido a unidades de la esfera.
      // Si el cursor se queda quieto, la esfera mira a su alrededor sola.
      let targetX;
      let targetY;
      const pointer = pointerRef.current;
      if (pointer && performance.now() - pointer.at < POINTER_MEMORY_MS) {
        const rect = ref.current.getBoundingClientRect();
        const cellW = rect.width / cols;
        const cellH = rect.height / rows;
        targetX = (pointer.x - (rect.left + rect.width / 2)) / cellW / rx;
        targetY = (pointer.y - (rect.top + rect.height / 2)) / cellH / ry;
      } else {
        targetX = 0.7 * Math.sin(anim.tick * 0.022);
        targetY = 0.5 * Math.cos(anim.tick * 0.016 + 1);
      }
      // Si el punto queda lejos, se limita manteniendo la dirección
      const len = Math.hypot(targetX, targetY);
      if (len > MAX_GAZE) {
        targetX = (targetX / len) * MAX_GAZE;
        targetY = (targetY / len) * MAX_GAZE;
      }
      anim.fx += (targetX - anim.fx) * 0.15;
      anim.fy += (targetY - anim.fy) * 0.15;

      setFrame(
        renderFrame({
          tick: anim.tick,
          energy: anim.energy,
          fx: anim.fx,
          fy: anim.fy,
          pokeAge: anim.tick - anim.pokeTick,
        })
      );
    }, FRAME_MS);

    return () => clearInterval(id);
  }, [running, renderFrame, size]);

  const stillFrame = useMemo(
    () => renderFrame({ tick: STILL_TICK }),
    [renderFrame]
  );

  return (
    <pre
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute bg-linear-135 from-(--theme-sphere-start) from-10% 
        to-(--theme-sphere-end) to-80% bg-clip-text font-mono leading-[1.2] tracking-[1px] text-transparent select-none ${FONT_CLASS[size]} ${className}`}
    >
      {reducedMotion ? stillFrame : frame}
    </pre>
  );
}

/**
 * Esfera ASCII "viva". Es una capa de fondo: quien la usa decide su posición
 * (clases de `className`) y su opacidad.
 *  - size: "large" | "compact" (cambiar de tamaño reinicia la esfera)
 *  - speaking: true mientras el "modelo" escribe una respuesta
 *
 * Reacciona a: el cursor (un foco de luz lo sigue y el cuerpo se estira hacia
 * él), los clics (onda + temblor), el chat (vibra al "hablar"), y por sí sola
 * (respira, late, destella y mira a su alrededor).
 */
export default function AsciiSphere({
  size = "large",
  speaking = false,
  className = "",
}) {
  return (
    <LiveSphere
      key={size}
      size={size}
      speaking={speaking}
      className={className}
    />
  );
}