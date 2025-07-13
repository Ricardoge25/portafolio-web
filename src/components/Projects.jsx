import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="Proyectos" className="py-20 px-4 pb-[280px]">
      <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1 text-center mb-2">
        MIS PROYECTOS
      </h2>
      <p className="text-xl text-center font-secondary text-primary mb-20">
        Algunos de los proyectos en los que he trabajado durante mi formación
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Aquí puedes agregar múltiples ProjectCard con diferentes props */}
        <ProjectCard 
          image="/IntraNote.png"
          title="Intranote"
          description="Sistema de gestión de notas e incidencias para empresas y mesas de soporte, desarrollado con Django."
          technologies={["Python", "Django", "HTML", "Bootrap", "JavaScript", "PostgreSQL"]}
        />
        <ProjectCard 
          image="/PlantillaPortafolioDjango.webp"
          title="Plantilla Portafolio"
          description="Plantilla de portafolio completa para mostrar proyectos e información sobre ti, desarrollada con Django y Bootstrap."
          technologies={["Python", "Django", "HTML", "Bootrap"]}
        />
        <ProjectCard 
          image="/SpaceInvasors.png"
          title="SpaceInvasors"
          description="Clon del mítico juego Space Invaders, desarrollado con Python y la librería Pygame."
          technologies={["Python", "Pygame"]}
        />
        <ProjectCard 
          image="/GestorRestaurante.png"
          title="Facturación Restaurante"
          description="Sistema de gestión de facturación para restaurantes que imprime tickets y facturas, desarrollado con Python y Tkinter."
          technologies={["Python", "Tkinter"]}
        />
        <ProjectCard 
          image="/HaluaStudio.webp"
          title="Landing Page Halua Studio"
          description="Landing page para Halua Studio, un estudio de diseño y desarrollo web, creada con React y Tailwind CSS."
          technologies={["React", "Tailwind CSS", "JavaScript", "Vite.js"]}
        />
      </div>
    </section>
  );
}