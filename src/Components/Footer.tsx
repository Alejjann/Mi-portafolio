interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => (
  <footer
    className={`w-full ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-900 text-white"} text-center p-6 mt-6`}
    aria-label="Pie de página"
  >
    <p className="text-sm text-gray-800 dark:text-gray-100">
        © 2025 Alejandro. Todos los derechos reservados.
    </p>
  </footer>
);

export default Footer;