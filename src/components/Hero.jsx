import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineCode } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="text-white flex flex-col items-center justify-center px-4 pt-[50px] pb-[200px] sm:pb-[250px] md:pb-[280px] overflow-hidden">
      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="w-full max-w-4xl 
        rounded-2xl p-6 sm:p-10 md:p-20
        shadow-lg relative overflow-hidden 
        bg-[url(/banner.webp)] bg-cover bg-center"
      >
        <div className="text-center">
          {/* TÍTULOS */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hola Mundo!
          </motion.h2>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-primary mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            Me llamo Ricardo González.
          </motion.h2>

          {/* DESCRIPCIÓN */}
          <motion.p
            className="text-sm sm:text-base md:text-lg mt-2 font-secondary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            Ingeniero Informático, apasionado por crear
            <br className="hidden sm:block" />
            soluciones tecnológicas innovadoras
          </motion.p>

          {/* BOTONES */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8 }}
            >
              <Link
                to="Proyectos"
                smooth={true}
                duration={600}
                spy={true}
                className="cursor-pointer bg-gradient-to-r from-dark-blue to-violet text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-80 transition duration-300 flex items-center gap-2"
              >
                Ver Proyectos
                <MdOutlineCode className="text-xl" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8 }}
            >
              <Link
                to="Contacto"
                smooth={true}
                duration={600}
                spy={true}
                className="cursor-pointer bg-gradient-to-r from-naraja to-rojo text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-80 transition duration-300 flex items-center gap-2"
              >
                Contáctame
                <AiOutlineMessage className="text-lg" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* REDES SOCIALES */}
      <motion.div
        className="flex gap-8 sm:gap-14 md:gap-20 mt-10 text-shadow-7 dark:text-shadow-3 text-2xl sm:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.a
          href="mailto:gonzalezricardo161@gmail.com"
          aria-label="Email"
          whileHover={{ scale: 1.2 }}
        >
          <FiMail className="hover:text-primary transition" />
        </motion.a>
        <motion.a
          href="https://github.com/Ricardoge25"
          aria-label="GitHub"
          target="_blank"
          whileHover={{ scale: 1.2 }}
        >
          <FiGithub className="hover:text-primary transition" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ricardo-gonzalez-1538b6252/"
          aria-label="LinkedIn"
          target="_blank"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedinIn className="hover:text-primary transition" />
        </motion.a>
      </motion.div>
    </section>
  );
}
