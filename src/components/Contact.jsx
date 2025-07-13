export default function Contact() {
  return (
    <section id="Contacto" className=" pt-20 pb-10 max-w-3xl mx-auto ">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-primary font-semibold text-shadow-10 dark:text-shadow-1 text-center mb-2">
          CONTACTO
        </h2>
        <p className="text-xl text-center font-secondary text-primary mb-10">
          ¿Tienes un proyecto en mente? <span>¡Hablemos!</span>
        </p>
      </div>

      {/* FORMULARIO */}
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        className="mt-15 bg-white py-10 px-15 rounded-2xl shadow-[0_0_50px_10px_rgba(77,0,99,99)] dark:shadow-[0_0_50px_10px_rgba(77,0,99,99)] border-shadow-3 space-y-6 dark:bg-shadow-9"
      >
        {/* NETLIFY HIDDEN INPUT */}
        <input type="hidden" name="form-name" value="contact-form" />

        {/* Nombre y Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-secondary text-sm dark:text-shadow-2">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="w-full border-2 rounded px-3 py-2 text-sm border-shadow-3 dark:border-shadow-5 dark:text-shadow-4 font-secondary"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-secondary text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="tuemail@email.com"
              className="w-full border-2 rounded px-3 py-2 text-sm border-shadow-3 font-secondary dark:text-shadow-4 dark:border-shadow-5"
              required
            />
          </div>
        </div>

        {/* Asunto */}
        <div>
          <label className="block mb-1 font-secondary text-sm">Asunto</label>
          <input
            type="text"
            name="subject"
            placeholder="Asunto del mensaje"
            className="w-full border-2 rounded px-3 py-2 text-sm border-shadow-3 font-secondary dark:text-shadow-4 dark:border-shadow-5"
            required
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="block mb-1 font-secondary text-sm">Mensaje</label>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            className="w-full border-2 rounded px-3 py-2 text-sm h-32 border-shadow-3 font-secondary dark:text-shadow-4 dark:border-shadow-5"
            required
          ></textarea>
        </div>

        {/* Botón */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-dark-blue to-violet text-white px-6 py-2 rounded-lg text-base font-semibold hover:opacity-50 transition duration-300"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </section>
  )
}