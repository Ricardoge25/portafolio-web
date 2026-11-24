export default function Footer() {
  return (
    <footer className="bg-shadow-4 text-shadow-1 py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm md:text-base font-secondary leading-relaxed">
          &copy; {new Date().getFullYear()} Ricardo González. Todos los derechos reservados.<br className="md:hidden" />
          Desarrollado con <span className="text-red-500 text-lg">♥</span> usando React y Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}