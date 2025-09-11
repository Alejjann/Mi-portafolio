interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => (
 <footer
  className={`p-6 text-center shadow-inner border-t transition-all duration-500 ${
    darkMode ? "bg-gray-950 text-gray-300 border-gray-700" : "bg-blue-50 text-gray-800 border-blue-300"
  }`}
>
  <p className="text-sm italic font-light">
    © 2025 Alejandro. Todos los derechos reservados.
  </p>
</footer>
);

export default Footer;