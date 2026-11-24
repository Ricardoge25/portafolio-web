import { useState, useEffect } from "react";
import { ImSun } from "react-icons/im";
import { IoMdMoon } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const menuItems = ["Sobre-Mí", "Proyectos", "Habilidades", "Contacto"];

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) return savedTheme === "dark";

    // Si no hay nada guardado, usa preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Agrega o quita la clase 'dark' al body
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-shadow-1 dark:bg-shadow-9 pt-1 px-6 z-50 shadow-md ">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-primary font-bold text-shadow-9 dark:text-shadow-1 tracking-tight">
            RAGE
          </h1>
          <p className="text-sm text-primary font-secondary italic font-normal -mt-1">
            Software developer
          </p>
        </div>

        {/* MENU HAMBURGUESA */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="text-2xl text-primary dark:text-shadow-1 focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex flex-1 align-text-center justify-center space-x-18">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              className="text-sm font-secondary font-black px-2 text-shadow-10 hover:text-primary dark:text-shadow-2 dark:hover:text-primary cursor-pointer"
            >
              {item.replace("-", " ")}
            </Link>
          ))}
        </nav>

        {/* BOTÓN DEL TEMA */}
        <div className="ml-4">
          <button
            onClick={handleToggle}
            className="relative p-2 rounded-full bg-shadow-3 hover:bg-gray-300 dark:bg-shadow-8 dark:hover:bg-gray-600 transition-colors w-10 h-10 flex items-center justify-center cursor-pointer"
            aria-label="Cambiar tema"
          >
            <span
              className="absolute transition-all duration-300"
              style={{
                opacity: darkMode ? 0 : 1,
                transform: darkMode
                  ? "scale(0.8) rotate(-30deg)"
                  : "scale(1) rotate(0deg)",
              }}
            >
              <IoMdMoon className="text-lg text-purple-800" />
            </span>
            <span
              className="absolute transition-all duration-300"
              style={{
                opacity: darkMode ? 1 : 0,
                transform: darkMode
                  ? "scale(1) rotate(0deg)"
                  : "scale(0.8) rotate(30deg)",
              }}
            >
              <ImSun className="text-lg text-primary" />
            </span>
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-start">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              className="block text-sm font-secondary text-shadow-10 dark:text-shadow-2 cursor-pointer"
              onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
            >
              {item.replace("-", " ")}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
