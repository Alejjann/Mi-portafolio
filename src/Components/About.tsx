import { motion } from "framer-motion";

const About: React.FC = () => (
  <motion.section
    id="sobre-mi"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="p-8 md:p-12 text-center bg-white rounded-lg shadow-lg"
    aria-labelledby="about-title"
  >
    <h2
      id="about-title"
      className="text-4xl font-bold mb-4 text-gray-800"
    >
      Sobre mí
    </h2>
    <p className="max-w-2xl mx-auto text-lg text-gray-600">
       Soy desarrollador web con experiencia en <span className="font-semibold text-blue-600">HTML</span>, <span className="font-semibold text-green-600">CSS</span>, <span className="font-semibold text-yellow-600">JavaScript</span>, <span className="font-semibold text-purple-600">PHP</span> y <span className="font-semibold text-pink-600">Python</span>. Me apasiona crear soluciones digitales que impacten positivamente y disfruto enfrentar nuevos retos sobre infomática. Estoy entusiasmado por seguir aprendiendo, mejorar mis habilidades y cultivar nuevos conocimientos para aportar valor en cada proyecto. 
    </p>
  </motion.section>
);


export default About;