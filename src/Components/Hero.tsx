import { motion } from "framer-motion";

const Hero: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="p-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
    aria-labelledby="hero-title"
  >
    <h2 id="hero-title" className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        ¡Hola! Soy Alejandro  
    </h2>
    <p className="text-lg max-w-2xl mx-auto">
      Soy un desarrollador apasionado por crear aplicaciones web modernas, eficientes y con un diseño atractivo.
    </p>
  </motion.section>
);

export default Hero;