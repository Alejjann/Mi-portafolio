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
    <h2 id="contact-title" className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
      Contacto
    </h2>
    <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
      ¿Quieres trabajar conmigo o tienes alguna pregunta?
    </p>
    <a
      href="mailto:tuemail@ejemplo.com"
      className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
      tabIndex={0}
    >
      Escríbeme
    </a>
  </motion.section>
);

export default Contact;