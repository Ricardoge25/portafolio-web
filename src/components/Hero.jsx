import { useState } from "react";
import { Link } from "react-scroll";
import { site, scrollOffset } from "../data/site";
import { heroQuestions } from "../data/heroQuestions";
import StreamedAnswer from "./StreamedAnswer";
import AsciiSphere from "./AsciiSphere";
import { useMediaQuery } from "../hooks/useMediaQuery";

// Halo del color de la página: despeja los textos cuando la esfera pasa por detrás
const HALO =
  "[text-shadow:0_0_12px_var(--theme-page),0_0_24px_var(--theme-page)]";

export default function Hero() {
  const [activeId, setActiveId] = useState(heroQuestions[0].id);
  // true mientras el "modelo" escribe; la esfera reacciona a esto
  const [speaking, setSpeaking] = useState(false);
  const active = heroQuestions.find((item) => item.id === activeId);

  // Desde 640 px: esfera grande a la derecha, que se desliza por detrás del chat
  // al estrecharse la pantalla. Por debajo: esfera compacta centrada detrás del
  // chat, más ancha que el panel para que se vea también por fuera.
  const isCompact = !useMediaQuery("(min-width: 40rem)");

  return (
    <section id="Inicio" className="relative overflow-hidden pt-10 pb-section">
      <div className="wrapper relative flex flex-col gap-6 lg:gap-10">
        <AsciiSphere
          size={isCompact ? "compact" : "large"}
          speaking={speaking}
          className={
            isCompact
              ? "bottom-8 left-1/2 -translate-x-1/2 opacity-80"
              : "top-1/2 -right-56 -translate-y-1/2 opacity-90"
          }
        />

        <div className="relative z-10 flex max-w-[37.5rem] flex-col gap-6">
          {/* NOMBRE Y ROL */}
          <h1
            className={`font-mono text-display font-extrabold tracking-tighter ${HALO}`}
          >
            {site.name}
          </h1>
          <p className={`text-lead text-content-soft ${HALO}`}>{site.role}</p>

          {/* CHAT CON EL "MODELO": vidrio esmerilado, deja ver la esfera detrás */}
          <div className="overflow-hidden rounded-panel border border-line bg-surface/75 backdrop-blur-sm">
            <div className="flex justify-between gap-4 border-b border-line px-4 py-3 font-mono text-meta text-content-muted">
              <span>modelo: {site.modelLabel}</span>
              <span>contexto: {site.contextLabel}</span>
            </div>

            <div className="flex min-h-40 flex-col gap-4 p-4 sm:p-6">
              <p className="self-end rounded-field bg-line px-4 py-2 text-small">
                {active.question}
              </p>
              <StreamedAnswer
                key={active.id}
                text={active.answer}
                onStreamingChange={setSpeaking}
              />
            </div>

            <div
              role="group"
              aria-label="Preguntas sugeridas"
              className="flex gap-2 overflow-x-auto border-t border-line p-4 sm:flex-wrap sm:overflow-visible sm:p-6"
            >
              {heroQuestions.map((item) => {
                const selected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveId(item.id)}
                    className={`min-h-11 shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 text-small transition-colors duration-150 ease-out ${
                      selected
                        ? "border-transparent bg-linear-to-r from-gradient-start to-gradient-end font-semibold text-on-gradient"
                        : "border-line-strong text-content-soft hover:bg-raised"
                    }`}
                  >
                    {item.question}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ACCIONES (solo cuando la navegación es el menú móvil) */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:max-w-[37.5rem] lg:hidden">
          <Link
            to="Proyectos"
            href="#Proyectos"
            smooth
            duration={600}
            offset={scrollOffset}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-gradient-start to-gradient-end px-4 text-small font-semibold text-on-gradient"
          >
            Ver proyectos
          </Link>
          <a
            href={site.cvHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-line-strong px-4 text-small text-content"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}