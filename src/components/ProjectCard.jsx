export function ProjectCard({ 
  image = "/project-image.jpg",
  title = "Título Proyecto", 
  description = "Descripción del Proyecto",
  technologies = ["Tecnología", "Tecnología", "Tecnología"]
}) {
  return (
    <div className="rounded-lg overflow-hidden border-4 border-shadow-3 max-w-sm mx-auto">
      {/* IMAGEN DEL PROYECTO */}
      <div className="h-65 w-full  overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      {/* CONTENIDO DEL PROYECTO */}
      <div className="h-65 w-full bg-shadow-2 text-shadow-10 py-4 px-2">
        <h3 className="text-4xl font-normal mb-2 font-primary">{title}</h3>
        <p className="mb-4 font-secondary font-normal">{description}</p>
        {/* TECNOLOGÍAS */}
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="border border-shadow-10 rounded-full px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

