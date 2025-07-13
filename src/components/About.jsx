const Tag = (props) => {
  return (
    <div className="inline-block bg-shadow-2 px-4 py-2 rounded-full text-sm font-medium">
      <p className="text-shadow-10 font-secondary">{props.label}</p>
    </div>
  );
};

function About() {
  return (
    <section id="Sobre-Mí" className="pt-20 px-6 pb-[200px]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1">
          SOBRE MÍ
        </h2>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

          {/* AVATAR */}
          <div className="flex justify-center">
            <img
              src="/AvatarRG.webp"
              alt="Avatar"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-48 md:h-48 rounded-full object-cover"
            />
          </div> 

          {/* TEXTO + TAGS  */}
          <div className="md:col-span2 w-full text-center col-span-2">
            <p className="sm:text-lg md:text-xl leading-relaxed tracking-wide font-primary dark:text-shadow-4 text-justify">
              Soy un estudiante de Ingeniería Informática con una gran pasión por
              el desarrollo de software y las nuevas tecnologías. Me encanta
              resolver problemas complejos y crear soluciones que impacten
              positivamente en la vida de las personas. Actualmente me estoy
              especializando en desarrollo web full-stack, con experiencia en
              tecnologías como React, Django, y bases de datos. Siempre estoy
              buscando nuevos desafíos y oportunidades para crecer
              profesionalmente.
            </p>
            {/* ETIQUETAS */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <Tag label="Desarrollo Web" />
              <Tag label="Bases de Datos" />
              <Tag label="Algoritmos" />
              <Tag label="Backend" />
              <Tag label="UX/UI" />
              <Tag label="Trabajo en equipo" />
              <Tag label="Resolución de problemas" />
              <Tag label="Aprendizaje continuo" />
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
