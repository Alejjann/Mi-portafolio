
import { motion } from "framer-motion";

const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => (
  <motion.section
  id="sobre-mi"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className={`p-8 md:p-12 text-center rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"}`}
  aria-labelledby="about-title"
  >
<h2
  id="about-title"
  className={`text-4xl font-bold mb-4 ${darkMode ? "text-blue-300" : "text-blue-700"}`}
>
  Sobre mí
</h2>
    <p className="max-w-2xl mx-auto text-lg">
  Soy desarrollador web con experiencia en
  <span className="font-semibold text-blue-600 dark:text-blue-300"> HTML</span>,
  <span className="font-semibold text-green-600 dark:text-green-300"> CSS</span>,
  <span className="font-semibold text-yellow-600 dark:text-yellow-300"> JavaScript</span>,
  <span className="font-semibold text-purple-600 dark:text-purple-300"> PHP</span> y
  <span className="font-semibold text-pink-600 dark:text-pink-300"> Python</span>.
  Me apasiona crear soluciones digitales que impacten positivamente y disfruto enfrentar nuevos retos sobre informática.
  Estoy entusiasmado por seguir aprendiendo, mejorar mis habilidades y cultivar nuevos conocimientos para aportar valor en cada proyecto.
</p>
  </motion.section>
);

export default About;