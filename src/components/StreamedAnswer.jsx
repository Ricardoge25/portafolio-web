import { useStreamedText } from "../hooks/useStreamedText";

export default function StreamedAnswer({ text }) {
  const { visibleText } = useStreamedText(text);

  return (
    <>
      {/* Lectores de pantalla: la respuesta completa, anunciada una sola vez
          (si se anunciara el streaming, se leería a pedazos). */}
      <p className="sr-only" aria-live="polite">
        {text}
      </p>

      {/* Visual: el texto completo: invisible, reserva el alto final para que 
          el panel no crezca mientras se escribe; encima va el texto visible.*/}
      <p aria-hidden="true" className="relative text-body text-content">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {visibleText}
          <span className="ml-0.5 inline-block h-4 w-2 bg-accent align-[-2px]" />
        </span>
      </p>
    </>
  );
}