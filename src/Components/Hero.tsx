import { motion } from "framer-motion";

const Hero: React.FC<{ darkMode: boolean }> = ({ darkMode }) => (
  <motion.section
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`p-12 text-center rounded-lg shadow-lg ${
      darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"
    }`}
    aria-labelledby="hero-title"
  >
    <h2 id="hero-title" className="text-5xl font-bold mb-4">
      ¡Hola! Soy Alejandro
    </h2>
    <p className="text-lg max-w-2xl mx-auto">
      Soy un desarrollador apasionado por crear aplicaciones web modernas, eficientes y con un diseño atractivo.
    </p>
  </motion.section>
);

export default Hero;