import { motion } from "framer-motion";

interface BlogProps {
  darkMode: boolean;
}

const articles = [
  {
    title: "Cómo empecé en programación",
    summary: "Un adelanto de lo que hablo en este artículo.",
    link: "#",
  },
  {
    title: "Mis herramientas favoritas",
    summary: "Un adelanto de lo que hablo en este artículo.",
    link: "#",
  },
];

const Blog: React.FC<BlogProps> = ({ darkMode }) => (
  <motion.section
    id="blog"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  className={`p-8 md:p-12 text-center rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"}`}  aria-labelledby="blog-title"
  >
    <h2
 id="about-title"
  className={`text-4xl font-bold mb-4 ${darkMode ? "text-blue-300" : "text-blue-700"}`}
>
  Blog
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {articles.map((article, i) => (
        <motion.article
          key={i}
          whileHover={{ scale: 1.05 }}
          className={`p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 transition-colors duration-300 ${darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"}`}
          role="article"
          aria-labelledby={`blog-article-${i}`}
        >
         <h3
        id={`blog-article-${i}`}
         className={`font-extrabold text-2xl mb-2 px-3 py-1 rounded-md inline-block ${
         darkMode ? "bg-gray-600 text-blue-400" : "text-blue-700"
       }`}
>
      {article.title}
</h3>
          <p className="mb-4"> {article.summary} </p>
          <a
            href={article.link}
            className="text-blue-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            tabIndex={0}
          >
            Leer más
          </a>
        </motion.article>
      ))}
    </div>
  </motion.section>
);

export default Blog;