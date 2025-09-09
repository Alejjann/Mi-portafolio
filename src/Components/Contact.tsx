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
className={`p-12 text-center ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
>
<h2 className="text-3xl font-semibold mb-6">Contacto</h2>
<p className="mb-4">¿Quieres trabajar conmigo o tienes alguna pregunta?</p>
<a href="mailto:tuemail@ejemplo.com" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
Escríbeme
</a>
</motion.section>
);


export default Contact;