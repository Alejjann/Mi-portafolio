
import { motion } from "framer-motion";

interface BlogProps {
darkMode: boolean;
}


const Blog: React.FC<BlogProps> = ({ darkMode }) => (
<motion.section
id="blog"
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="p-12 text-center"
>
<h2 className="text-3xl font-semibold mb-6">Blog</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
{["Cómo empecé en programación", "Mis herramientas favoritas"].map((title, i) => (
<motion.div
key={i}
whileHover={{ scale: 1.02 }}
className={`p-6 rounded-xl shadow ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
>
<h3 className="font-bold text-xl mb-2">{title}</h3>
<p className="mb-4">Un adelanto de lo que hablo en este artículo.</p>
<a href="#" className="text-blue-400 font-semibold hover:underline">Leer más</a>
</motion.div>
))}
</div>
</motion.section>
);


export default Blog;