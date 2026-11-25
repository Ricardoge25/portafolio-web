import { useCallback, useSyncExternalStore } from "react";

/**
 * Devuelve si la media query se cumple y se actualiza si cambia
 * (por ejemplo, al girar el móvil o al cambiar el ajuste de accesibilidad).
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (notify) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", notify);
      return () => mql.removeEventListener("change", notify);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
} 