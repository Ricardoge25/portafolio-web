import { FiGithub, FiMail} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineCode } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="h-full text-white flex flex-col items-center justify-center px-4 pt-10 pb-[200px] sm:pb-[250px] md:pb-[280px]">
      {/* CONTENEDOR PRINCIPAL */}
      <div
      className="w-full max-w-4xl 
      rounded-2xl p-6 sm:p-10 md:p-20
      shadow-lg relative overflow-hidden 
      bg-[url(/hero.jpg)] bg-cover bg-center"
      >
        <div className='text-center'>
          {/* TÍTULOS */}
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold font-primary'>
            Hola!
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold font-primary mt-2'>
            Me llamo Ricardo González.
          </h2>
          
          {/* DESCRIPCIÓN */}
          <p className='text-sm sm:text-base md:text-lg mt-2 font-secondary'>
            Ingeniero Informático, apasionado por crear<br className="hidden sm:block" />
            soluciones tecnológicas innovadoras
          </p>

          {/* BOTONES */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div>
              <a 
                href="#Proyectos" 
                className='bg-gradient-to-r from-dark-blue to-violet text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-80 transition duration-300 flex items-center gap-2'
              >
                Ver Proyectos
                <MdOutlineCode className="text-xl" />
              </a>
          </div>
          <div>
            <a 
              href="#Contacto" 
              className='bg-gradient-to-r from-naraja to-rojo text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-80 transition duration-300 flex items-center gap-2'
            >
              Contáctame
              <AiOutlineMessage className="text-lg" />
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* REDES SOCIALES */}
      <div className='flex gap-8 sm:gap-14 md:gap-20 mt-10 text-shadow-7 dark:text-shadow-3 text-2xl sm:text-3xl'>
        <a href="mailto:gonzalezricardo161@gmail.com" aria-label="Email">
          <FiMail className="hover:text-primary transition" />
        </a>
        <a href="https://github.com/Ricardoge25" aria-label="GitHub" target="_blank">
          <FiGithub className="hover:text-primary transition " />
        </a>
        <a href="https://www.linkedin.com/in/ricardo-gonzalez-1538b6252/" aria-label="LinkedIn" target="_blank">
          <FaLinkedinIn className="hover:text-primary transition" />
        </a>
      </div>
    </section>
  );
}


