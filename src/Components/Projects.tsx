import { motion } from "framer-motion";

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => (
  <motion.section
    id="proyectos"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`p-12 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg`}
    aria-labelledby="projects-title"
  >
    <h2
  id="projects-title"
  className="text-4xl font-bold mb-10 text-center text-blue-700 dark:text-blue-300"
>
  Proyectos
</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[1, 2, 3].map((p) => (
        <motion.article
          key={p}
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-2xl shadow transition-colors duration-300 ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-800"}`}
          aria-labelledby={`project-title-${p}`}
        >
          <h3 id={`project-title-${p}`} className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
            Proyecto {p}
          </h3>
          <p className="mb-4">Descripción breve del proyecto.</p>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            tabIndex={0}
          >
            Ver más
          </a>
        </motion.article>
      ))}
    </div>
  </motion.section>
);

export default Projects;