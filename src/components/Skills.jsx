import ProgressBar from "./ProgressBar";
import { SiDjango } from "react-icons/si";
import { FaCodeBranch, FaReact, FaJava, FaAngular, FaNodeJs, FaCode } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // animación en cascada
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section id="Habilidades" className="py-20 px-4 pb-[200px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1 text-center mb-2">
          HABILIDADES TÉCNICAS
        </h2>
        <p className="text-xl text-center font-secondary text-primary mb-20">
          Tecnología y herramientas que manejo en mis proyectos
        </p>

        {/* GRID SKILLS animado */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { label: "Python", percent: 75, Icon: FaCode },
            { label: "Django", percent: 70, Icon: SiDjango },
            { label: "Git", percent: 70, Icon: FaCodeBranch },
            { label: "React", percent: 50, Icon: FaReact },
            { label: "Java", percent: 55, Icon: FaJava },
            { label: "Bases de Datos", percent: 60, Icon: FiDatabase },
            { label: "Angular", percent: 25, Icon: FaAngular },
            { label: "Node.js", percent: 15, Icon: FaNodeJs },
          ].map(({ label, percent, Icon }, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <ProgressBar label={label} percentage={percent} Icon={Icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}