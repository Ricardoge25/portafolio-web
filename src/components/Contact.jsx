import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="Contacto"
      className="pt-20 pb-32 px-4"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* TÍTULO */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1 text-center mb-2">
            CONTACTO
          </h2>
          <p className="text-xl text-center font-secondary text-primary">
            ¿Tienes un proyecto en mente? <span>¡Hablemos!</span>
          </p>
        </div>

        {/* FORMULARIO */}
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/gracias.html"
          className="bg-white dark:bg-shadow-9 py-10 px-15 rounded-2xl shadow-[0_0_50px_10px_rgba(77,0,99,99)] dark:shadow-[0_0_50px_10px_rgba(77,0,99,99)] space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* CAMPO OCULTO NETLIFY */}
          <input type="hidden" name="form-name" value="contact" />

          {/* HONEYPOT ANTISPAM: invisible para personas, los bots lo rellenan */}
          <p hidden>
            <label>
              No rellenar: <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          {/* Nombre y Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <label className="block mb-1 font-secondary text-sm dark:text-shadow-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full border-2 rounded px-3 py-2 text-sm border-shadow-3 dark:border-shadow-5 dark:text-shadow-4 font-secondary"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block mb-1 font-secondary text-sm dark:text-shadow-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="tuemail@email.com"
                className="w-full border-2 rounded px-3 py-2 text-sm border-shadow-3 font-secondary dark:text-shadow-4 dark:border-shadow-5"
                required
              />
            </motion.div>
          </div>

          {/* Asunto */}
          <motion.div variants={itemVariants}>
            <label className="block mb-1 font-secondary text-sm dark:text-shadow-2">
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Asunto del mensaje"
              className="w-full border-2 rounded px-3 py-2 text-sm border-shadow-3 font-secondary dark:text-shadow-4 dark:border-shadow-5"
              required
            />
          </motion.div>

          {/* Mensaje */}
          <motion.div variants={itemVariants}>
            <label className="block mb-1 font-secondary text-sm dark:text-shadow-2">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              className="w-full border-2 rounded px-3 py-2 text-sm h-32 border-shadow-3 font-secondary dark:text-shadow-4 dark:border-shadow-5"
              required
            ></textarea>
          </motion.div>

          {/* Botón */}
          <motion.div className="text-center" variants={itemVariants}>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-dark-blue to-violet text-white px-6 py-2 rounded-lg text-base font-semibold hover:opacity-50 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
