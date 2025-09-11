import { useState, type Dispatch, type SetStateAction } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header
 className={`p-6 flex justify-between items-center shadow-md transition-colors duration-500 ${
    darkMode ? "bg-blue-900 text-gray-100" : "bg-blue-100 text-gray-800"
  } relative`}
  aria-label="Encabezado principal"
    >
      <span className="text-2xl font-bold tracking-wide text-blue-500 dark:text-blue-300">
    Alejandro
  </span>
  <nav className="hidden md:flex gap-8" aria-label="Navegación principal">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="font-semibold hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
      >
        {link.label}
      </a>
    ))}
  </nav>
  <button
    onClick={() => setOpen(!open)}
    className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
    aria-label="Abrir menú de navegación"
    aria-expanded={open}
  >
    ☰
  </button>
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="ml-4 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition duration-300"
    aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
  >
    {darkMode ? "🌙 Oscuro" : "☀️ Claro"}
  </button>
  {open && (
    <nav
      className={`absolute top-16 left-0 w-full z-50 shadow-lg rounded-b-xl p-6 flex flex-col items-center gap-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-900 text-white"
      } md:hidden`}
      aria-label="Menú móvil"
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="font-semibold text-lg hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )}
</header>
  );
};

export default Header;