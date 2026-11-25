import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navItems, scrollOffset, site } from "../data/site";

// Clases compartidas por los enlaces de la navegaci´n
const linkClass = 
  "inline-flex min-h-11 cursor-pointer items-center text-small font-medium text-content transition-colors duration-150 ease-out hover:text-accent";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => 
    document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleTheme = () => {
    const next = !darkMode;
    const root = document.documentElement;

    root.classList.toggle("dark", next);
    root.classList.toggle("light", !next);
    setDarkMode(next);    

    // Solo se guarda cuando el usuario elige: sin elección se sigue al sistema
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* localStorage no disponible: el cambio vale solo para esta visita */
    }
  };

  // Escape cierra el menú móvil
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/80 backdrop-blur">
      <div className="wrapper flex h-16 items-center justify-between lg:h-18">
        {/* LOGO */}
        <a href="#" className="font-mono text-body font-bold text-content">
          {site.handle}
        </a>

        <div className="flex items-center gap-2 lg:gap-8">
          {/* NAVEGACIÓN DE ESCRITORIO */}
          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {navItems.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                href={`#${to}`}
                smooth
                duration={600}
                offset={scrollOffset}
                className={linkClass}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CAMBIO DE TEMA */}
          <button
            type="button"
            onClick={handleToggleTheme}
            aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line-strong text-content transition-colors duration-150 ease-out hover:bg-raised"
          >
            {darkMode ? (
              <FiSun aria-hidden="true" className="text-lg" />
            ) : (
              <FiMoon aria-hidden="true" className="text-lg" />
            )}
          </button>

          {/* DESCARGAR CV (escritorio; en móvil va en el hero) */}
          <a
            href={site.cvHref}
            className="hidden min-h-11 items-center rounded-full bg-linear-to-r from-gradient-start to-gradient-end px-5 text-small font-semibold text-on-gradient lg:inline-flex"
          >
            Descargar CV
          </a>

          {/* BOTÓN DEL MENÚ MÓVIL */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line-strong text-content lg:hidden"
          >
            {menuOpen ? (
              <FiX aria-hidden="true" className="text-lg" />
            ) : (
              <FiMenu aria-hidden="true" className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <nav
          id="menu-movil"
          aria-label="Principal (móvil)"
          className="border-t border-line bg-page lg:hidden"
        >
          <ul className="wrapper flex flex-col py-2">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  href={`#${to}`}
                  smooth
                  duration={600}
                  offset={scrollOffset}
                  className={`${linkClass} w-full`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}