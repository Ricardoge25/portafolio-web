import ProgressBar from "./ProgressBar";
import { FaCode } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="py-20 px-4 pb-[280px]">
      <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1 text-center mb-2">
        HABILIDADES TÉCNICAS
      </h2>
      <p className="text-xl text-center font-secondary text-primary mb-20">
        Tecnología y herramientas que manejo en mis proyectos
      </p>

      <div className="grid grid-cols-2 gap-8 align-items-center justify-items-center">
        <ProgressBar
          label="Python"
          percentage={75}
          Icon={FaCode}
        />
        <ProgressBar
          label="Django"
          percentage={70}
          Icon={SiDjango}
        />
        <ProgressBar
          label="Git"
          percentage={70}
          Icon={FaCodeBranch}
        />
        <ProgressBar
          label="React"
          percentage={50}
          Icon={FaReact}
        />
        <ProgressBar
          label="Java"
          percentage={55}
          Icon={FaJava}
        />
        <ProgressBar
          label="Bases de Datos"
          percentage={60}
          Icon={FiDatabase}
        />
        <ProgressBar
          label="Angular"
          percentage={25}
          Icon={FaAngular}
        />
        <ProgressBar
          label="Node.js"
          percentage={15}
          Icon={FaNodeJs}
        />
      </div>
    </section>
  );
}