import { useState, useEffect } from "react";
import { ImSun } from 'react-icons/im';
import { IoMdMoon } from "react-icons/io";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  // Agrega o quita la clase 'dark' al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (  
    <section className="fixed top-0 left-0 w-full bg-shadow-1 dark:bg-shadow-9 pt-1 px-6 z-50">
      {/* LOGO */}
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="flex flex-col">
            <h1 className="text-3xl font-primary font-bold text-shadow-9 dark:text-shadow-1 tracking-tight">RAGE</h1>
            <p className="text-xl text-primary font-secondary italic font-light -mt-1">Software developer</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex flex-1 align-text-center justify-center">
          <ul className="flex space-x-8">
            <li>
              <a href="#Sobre-Mí" className=" text-lg font-secondary px-12 text-shadow-10 hover:text-shadow-7 dark:text-shadow-2 dark:hover:text-primary">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#Proyectos" className="text-lg font-secondary px-12 text-shadow-10 hover:text-shadow-7 dark:text-shadow-2 dark:hover:text-primary">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#Contacto" className="text-lg font-secondary px-12 text-shadow-10 hover:text-shadow-7 dark:text-shadow-2 dark:hover:text-primary">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* THEME BUTTON */}
        {/* THEME SWITCH BUTTON */}
        <div className="ml-auto">
          <button
            onClick={handleToggle}
            className=
            "p-2 rounded-full bg-shadow-3 hover:bg-gray-300 dark:bg-shadow-8 dark:hover:bg-gray-600 transition-colors relative w-12 h-12 flex items-center justify-center cursor-pointer"
            aria-label="Cambiar tema"
          >
            <span className="absolute transition-all duration-300"
              style={{
                opacity: darkMode ? 0 : 1,
                transform: darkMode ? "scale(0.8) rotate(-30deg)" : "scale(1) rotate(0deg)"
              }}>
              <IoMdMoon className="text-2xl text-secondary" />
            </span>
            <span className="absolute transition-all duration-300"
              style={{
                opacity: darkMode ? 1 : 0,
                transform: darkMode ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(30deg)"
              }}>
              <ImSun className="text-2xl text-primary" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
