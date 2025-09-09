interface FooterProps {
darkMode: boolean;
}


const Footer: React.FC<FooterProps> = ({ darkMode }) => (
<footer className={`${darkMode ? "bg-gray-800" : "bg-gray-900 text-white"} text-center p-6 mt-6`}>
<p>© 2025 [Tu Nombre]. Todos los derechos reservados.</p>
</footer>
);


export default Footer;