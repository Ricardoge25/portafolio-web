import { ProjectCard } from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0},
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:false, margin:"0px 0px -100px 0px"});


  return (
    <section id="Proyectos" className="py-20 px-4 pb-[200px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1 text-center mb-2">
          MIS PROYECTOS
        </h2>
        <p className="text-xl text-center font-secondary text-primary mb-20">
          Algunos de los proyectos en los que he trabajado durante mi formación
        </p>

        {/* GRID DE PROYECTOS */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.03}}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <ProjectCard 
            image="/IntraNote.png"
            title="Intranote"
            description="Sistema de gestión de notas e incidencias para empresas y mesas de soporte, desarrollado con Django."
            technologies={["Python", "Django", "HTML", "Bootrap", "JavaScript", "PostgreSQL"]}
            />
          </motion.div>
          
          <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.03}}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <ProjectCard 
            image="/PlantillaPortafolioDjango.webp"
            title="Plantilla Portafolio"
            description="Plantilla de portafolio completa para mostrar proyectos e información sobre ti, desarrollada con Django y Bootstrap."
            technologies={["Python", "Django", "HTML", "Bootrap"]}
            />
          </motion.div>
          <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.03}}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <ProjectCard 
            image="/SpaceInvasors.png"
            title="SpaceInvasors"
            description="Clon del mítico juego Space Invaders, desarrollado con Python y la librería Pygame."
            technologies={["Python", "Pygame"]}
            />
          </motion.div>
          
          <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.03}}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <ProjectCard 
            image="/GestorRestaurante.png"
            title="Facturación Restaurante"
            description="Sistema de gestión de facturación para restaurantes que imprime tickets y facturas, desarrollado con Python y Tkinter."
            technologies={["Python", "Tkinter"]}
            />
          </motion.div>
          <motion.div 
          variants={cardVariants}
          whileHover={{ scale: 1.03}}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <ProjectCard 
            image="/HaluaStudio.webp"
            title="Landing Page Halua Studio"
            description="Landing page para Halua Studio, un estudio de diseño y desarrollo web, creada con React y Tailwind CSS."
            technologies={["React", "Tailwind CSS", "JavaScript", "Vite.js"]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}