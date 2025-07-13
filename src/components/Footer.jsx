export default function Footer() {
  return (
    <footer className="bg-shadow-4 text-shadow-1 py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm md:text-base font-secondary leading-relaxed">
          &copy; 2025 Ricardo González. Todos los derechos reservados.<br className="md:hidden" />
          Desarrollado con usando React y Tailwind CSS{" "} 
          <span className="text-red-500 text-lg">♥</span>.
        </p>
      </div>
    </footer>
  )
}