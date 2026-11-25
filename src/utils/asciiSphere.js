// Rampa de caracteres, de "vacío" a "denso"
const RAMP = " .·:-=+*%#@";

// Sectores angulares en los que se divide el contorno para deformarlo
const SECTORS = 96;

// Un latido (anillo que se expande) cada 126 fotogramas, unos 9 segundos
const PULSE_TICKS = 126;

// Duración (en fotogramas) de la onda que se lanza al hacer clic
const POKE_TICKS = 24;

// Medidas de las cuadrículas (en celdas). rx / ry son los radios de la esfera;
// ry es menor que rx porque una celda de texto es más alta que ancha.
//  - large:   escritorio y tablet (se pinta a 13 px)
//  - compact: móvil, menos caracteres y letra más grande (se pinta a 16 px)
export const SIZES = {
  large: { cols: 116, rows: 68, rx: 36, ry: 22 },
  compact: { cols: 58, rows: 42, rx: 18.5, ry: 11.9 },
};

/**
 * Prepara una esfera para una cuadrícula y devuelve la función `render`.
 * Lo que no cambia entre fotogramas (posición de cada celda) se calcula una
 * sola vez aquí; `render` solo hace lo que depende del tiempo.
 *
 * render({ tick, energy, fx, fy, pokeAge }) → texto con saltos de línea
 *  - tick:    número de fotograma (mismo tick = mismo texto)
 *  - energy:  0 en reposo, 1 "hablando": ondas más rápidas, voz que hace
 *             vibrar el contorno y más brillo
 *  - fx / fy: punto que mira, en unidades de la esfera (1 = su borde): un foco
 *             de luz va hasta allí y el cuerpo se estira hacia ese lado
 *  - pokeAge: fotogramas desde el último clic; lanza una onda y un temblor
 */
export function createSphere({ cols, rows, rx, ry }) {
  const total = cols * rows;
  const px = new Float32Array(total); // posición normalizada de cada celda
  const py = new Float32Array(total);
  const sector = new Uint8Array(total); // sector angular al que pertenece
  const texA = new Float32Array(total); // fase fija de la textura
  const texB = new Float32Array(total);
  const radius = new Float32Array(SECTORS); // radio actual de cada sector

  const cx = cols / 2;
  const cy = rows / 2;
  let i = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const nx = (x - cx) / rx;
      const ny = (y - cy) / ry;
      px[i] = nx;
      py[i] = ny;
      const angle = Math.atan2(ny, nx) + Math.PI; // 0 .. 2π
      sector[i] = Math.floor((angle / (Math.PI * 2)) * SECTORS) % SECTORS;
      texA[i] = x * 0.21;
      texB[i] = y * 0.33;
      i++;
    }
  }

  return function render({
    tick,
    energy = 0,
    fx = 0,
    fy = 0,
    pokeAge = 9999,
  }) {
    const t = tick * 0.077;
    const poking = pokeAge < POKE_TICKS;

    // Hacia dónde mira (misma convención de ángulo que los sectores)
    const focusLen = Math.min(1, Math.hypot(fx, fy));
    const focusAngle = Math.atan2(fy, fx) + Math.PI;

    // Contorno vivo: respira, se deforma como una ameba, se estira hacia lo
    // que mira, vibra con la "voz" y tiembla cuando le haces clic
    const breath = 0.06 * Math.sin(t * 0.55);
    const voice =
      0.05 * energy * Math.sin(tick * 0.55) * Math.sin(tick * 0.23 + 1);
    const jiggle = poking
      ? 0.08 * Math.exp(-pokeAge / 7) * Math.cos(pokeAge * 0.8)
      : 0;
    for (let s = 0; s < SECTORS; s++) {
      const a = ((s + 0.5) / SECTORS) * Math.PI * 2;
      const toward = Math.max(0, Math.cos(a - focusAngle));
      radius[s] =
        1 +
        breath +
        voice +
        jiggle +
        0.05 * Math.sin(3 * a + t * 0.9) +
        0.03 * Math.sin(5 * a - t * 1.3 + 1.7) +
        0.04 * energy * Math.sin(7 * a + t * 3.1) +
        0.12 * focusLen * toward * toward;
    }

    // Latido: un anillo nace en el centro, se expande y se desvanece
    const pulseRadius = ((tick % PULSE_TICKS) / PULSE_TICKS) * 1.3;
    const pulseFade = 1 - pulseRadius / 1.3;

    // Onda del clic: más rápida y brillante que el latido
    const pokeRadius = pokeAge * 0.065;
    const pokeFade = poking ? 1 - pokeAge / POKE_TICKS : 0;

    const leanX = fx * 0.1; // el cuerpo se desplaza hacia donde mira
    const leanY = fy * 0.1;
    const waveSpeed = 2 + energy * 2.5;
    const gain = 1 + energy * 0.2;
    const frozen = tick >> 1; // las chispas cambian cada 2 fotogramas

    const lines = [];
    i = 0;
    for (let y = 0; y < rows; y++) {
      let line = "";
      for (let x = 0; x < cols; x++) {
        const dx = px[i] - leanX;
        const dy = py[i] - leanY;
        const d = Math.hypot(dx, dy) / radius[sector[i]];

        let value = 0;
        if (d <= 1.15) {
          // ondas + textura (la base original del diseño)
          value =
            (Math.sin(d * 9 - t * waveSpeed) * 0.5 + 0.5) * (1.15 - d) +
            Math.sin(texA[i] + t) * Math.cos(texB[i] - t) * 0.25;

          // foco de luz que sigue a la mirada (el efecto más visible)
          const glow = Math.max(0, 1 - Math.hypot(px[i] - fx, py[i] - fy) / 0.6);
          value += glow * glow * 0.6;

          // anillo del latido
          const ring = Math.max(0, 1 - Math.abs(d - pulseRadius) / 0.1);
          value += ring * 0.35 * pulseFade;

          // onda del clic
          if (poking) {
            const wave = Math.max(0, 1 - Math.abs(d - pokeRadius) / 0.13);
            value += wave * 0.8 * pokeFade;
          }

          value *= gain;

          // chispas: celdas que destellan al azar
          if (
            d < 1 &&
            (Math.imul(i + 1, 2654435761) ^ Math.imul(frozen + 7, 40503)) %
              997 <
              4
          ) {
            value = 1;
          }
        }

        const index = Math.max(
          0,
          Math.min(RAMP.length - 1, Math.floor(value * RAMP.length))
        );
        line += RAMP[index];
        i++;
      }
      lines.push(line);
    }

    return lines.join("\n");
  };
}