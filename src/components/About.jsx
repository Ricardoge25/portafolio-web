import { motion, scale, useInView } from "framer-motion";
import { useRef } from "react";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Tag = (props) => {
  return (
    <motion.div 
      variants={tagVariants}
      className="inline-block bg-shadow-2 px-4 py-2 rounded-full text-sm font-medium"
      >
      <p className="text-shadow-10 font-secondary">{props.label}</p>
    </motion.div>
  );
};

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px"});

  return (
    <section id="Sobre-Mí" className="pt-20 px-6 pb-[200px]">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut"}}
      >
        <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1">
          SOBRE MÍ
        </h2>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {/* AVATAR */}
          <motion.div 
            className="max-w-xl text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <img
              src="/AvatarRG.webp"
              alt="Avatar"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-48 md:h-48 rounded-full object-cover"
            />
          </motion.div> 

          {/* TEXTO + TAGS  */}
          <motion.div 
            className="w-full text-center col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
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
            <motion.div 
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {[
                "Desarrollo Web", "Bases de Datos", "Algoritmos", "Backend",
                "UX/UI", "Trabajo en equipo", "Resolución de problemas", "Aprendizaje continuo"
              ].map((label, index) => (
                <Tag key={index} label={label} />
              ))}
            </motion.div> 
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
