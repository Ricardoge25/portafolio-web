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
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          technologies={["React", "Node.js", "MongoDB"]}
        />
        <ProjectCard 
          image="/PlantillaPortafolioDjango.png"
          title="Plantilla Portafolio"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          technologies={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard 
          image="/SpaceInvasors.png"
          title="SpaceInvasors"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          technologies={["Python", "Django"]}
        />
        <ProjectCard 
          image="/GestorRestaurante.png"
          title="Facturación Restaurante"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          technologies={["HTML", "CSS", "JavaScript"]}
        />
      </div>
    </section>
  );
}