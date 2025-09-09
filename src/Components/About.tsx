import { motion } from "framer-motion";


const About: React.FC = () => (
<motion.section
id="sobre-mi"
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="p-12 text-center"
>
<h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
<p className="max-w-2xl mx-auto">
Tengo experiencia en tecnologías como React, Node.js y Tailwind CSS. Me encanta aprender nuevas herramientas y trabajar en proyectos que resuelvan problemas reales.
</p>
</motion.section>
);


export default About;