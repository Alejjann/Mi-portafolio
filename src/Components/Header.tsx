import { useState } from 'react';
import { type Dispatch, type SetStateAction } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="p-6 flex justify-between items-center shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-900 text-white'}">
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
      <nav className="hidden md:flex space-x-6">
        <a href="#sobre-mi" className="hover:text-blue-400">Sobre mí</a>
        <a href="#proyectos" className="hover:text-blue-400">Proyectos</a>
        <a href="#blog" className="hover:text-blue-400">Blog</a>
        <a href="#contacto" className="hover:text-blue-400">Contacto</a>
      </nav>

      {open && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 p-6 md:hidden">
          <a href="#sobre-mi" onClick={() => setOpen(false)}>Sobre mí</a>
          <a href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
      )}

      <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
        {darkMode ? '🌙 Oscuro' : '☀️ Claro'}
      </button>
    </header>
  );
};
export default Header;