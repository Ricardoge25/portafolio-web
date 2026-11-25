import { useState } from "react";
import { Link } from "react-scroll";
import { site, scrollOffset } from "../data/site";
import { heroQuestions } from "../data/heroQuestions";

export default function Hero() {
  const [activeId, setActiveId] = useState(heroQuestions[0].id);
  const active = heroQuestions.find((item) => item.id === activeId);

  return (
    <section id="Inicio" className="relative overflow-hidden pt-10 pb-section">
      {/* La esfera ASCII animada se añade en un commit posterior */}

      <div className="wrapper relative flex flex-col gap-6 lg:gap-10">
        <div className="flex max-w-[37.5rem] flex-col gap-6">
          {/* NOMBRE Y ROL */}
          <h1 className="font-mono text-display font-extrabold tracking-tighter">
            {site.name}
          </h1>
          <p className="text-lead text-content-soft">{site.role}</p>

          {/* CHAT CON EL "MODELO" */}
          <div className="overflow-hidden rounded-panel border border-line bg-surface/90">
            <div className="flex justify-between gap-4 border-b border-line px-4 py-3 font-mono text-meta text-content-muted">
              <span>modelo: {site.modelLabel}</span>
              <span>contexto: {site.contextLabel}</span>
            </div>

            <div className="flex min-h-40 flex-col gap-4 p-4 sm:p-6">
              <p className="self-end rounded-field bg-line px-4 py-2 text-small">
                {active.question}
              </p>
              <p className="text-body text-content" aria-live="polite">
                {active.answer}
                <span
                  aria-hidden="true"
                  className="ml-0.5 inline-block h-4 w-2 bg-accent align-[-2px]"
                />
              </p>
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
        <div className="grid grid-cols-2 gap-3 sm:max-w-[37.5rem] lg:hidden">
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