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
className={`p-12 ${darkMode ? "bg-gray-800" : "bg-white"}`}
>
<h2 className="text-3xl font-semibold mb-10 text-center">Proyectos</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[1, 2, 3].map((p) => (
<motion.div
key={p}
whileHover={{ scale: 1.05 }}
className={`p-6 rounded-2xl shadow transition ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
>
<h3 className="font-bold text-xl mb-2">Proyecto {p}</h3>
<p className="mb-4">Descripción breve del proyecto.</p>
<a href="#" className="text-blue-400 font-semibold hover:underline">Ver más</a>
</motion.div>
))}
</div>
</motion.section>
);


export default Projects;