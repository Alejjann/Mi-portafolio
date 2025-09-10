import { useState, type Dispatch, type SetStateAction } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header
      className={`p-6 flex justify-between items-center shadow-md ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-900 text-white"
      } relative`}
      aria-label="Encabezado principal"
    >
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        aria-label="Abrir menú de navegación"
        aria-expanded={open}
      >
        ☰
      </button>
      <nav className="hidden md:flex space-x-6" aria-label="Navegación principal">
        <a href="#sobre-mi" className="hover:text-blue-400 transition">Sobre mí</a>
        <a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a>
        <a href="#blog" className="hover:text-blue-400 transition">Blog</a>
        <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
      </nav>

      {open && (
        <nav
          className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 p-6 md:hidden z-50"
          aria-label="Menú móvil"
        >
          <a href="#sobre-mi" onClick={() => setOpen(false)} className="text-gray-100 hover:text-blue-400 transition">Sobre mí</a>
          <a href="#proyectos" onClick={() => setOpen(false)} className="text-gray-100 hover:text-blue-400 transition">Proyectos</a>
          <a href="#blog" onClick={() => setOpen(false)} className="text-gray-100 hover:text-blue-400 transition">Blog</a>
          <a href="#contacto" onClick={() => setOpen(false)} className="text-gray-100 hover:text-blue-400 transition">Contacto</a>
        </nav>
      )}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={`Activar modo ${darkMode ? "claro" : "oscuro"}`}
      >
        {darkMode ? "🌙 Oscuro" : "☀️ Claro"}
      </button>
    </header>
  );
};

export default Header;