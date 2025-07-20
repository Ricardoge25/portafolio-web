export function ProjectCard({ 
  image = "/project-image.jpg",
  title = "Título Proyecto", 
  description = "Descripción del Proyecto",
  technologies = ["Tecnología", "Tecnología", "Tecnología"]
}) {
  return (
    <div 
      className="h-full flex flex-col rounded-xl overflow-hidden border-4 
      border-shadow-3 shadow-md bg-white dark:bg-shadow-9 
      dark:text-shadow-2 trnasition-all duration-300 max-w-md 
      mx-auto transition-transform hover:shadow-xl dark:hover:shadow-purple-800">
      {/* IMAGEN DEL PROYECTO */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENIDO DEL PROYECTO */}
      <div className="p-6 text-shadow-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 font-primary dark:text-shadow-2">{title}</h3>
        <p className="text-sm md:text-base mb-4 font-secondary font-normal dark:text-shadow-2">
          {description}
        </p>

        {/* TECNOLOGÍAS */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="border border-shadow-10 dark:border-shadow-4 text-sm px-3 py-1 rounded-full bg-shadow-2 dark:text-shadow-10 text-shadow-10 font-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

