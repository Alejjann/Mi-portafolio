import { motion } from "framer-motion";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => (
  <motion.section
    id="contacto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`p-12 text-center rounded-lg shadow-lg ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    aria-labelledby="contact-title"
  >
    <h2
  id="contact-title"
  className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-300"
>
  Contacto
</h2>
<p className="mb-4 text-lg text-gray-800 dark:text-gray-200">
        Aquí tienes mi correo electrónico para que puedas escribirme directamente: 
    </p>
    <a
      href="mailto:alejan27do@gmail.com"
      className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
      tabIndex={0}
    >
      Escríbeme
    </a>
  </motion.section>
);

export default Contact;