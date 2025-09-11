import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
      <div className={darkMode ? "bg-blue-900 min-h-screen" : "bg-blue-50 min-h-screen"}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto px-4">
       <section id="hero"className="mt-16 md:mt-24 px-6">
  <Hero darkMode={darkMode} />
</section>
        <section id="sobre-mi"className="mt-16 md:mt-24 px-6">
          <About darkMode={darkMode} />
        </section>
        <section id="proyectos"className="mt-16 md:mt-24 px-6">
          <Projects darkMode={darkMode} />
        </section>
        <section id="blog"className="mt-16 md:mt-24 px-6">
          <Blog darkMode={darkMode} />
        </section>
        <section id="contacto"className="mt-16 md:mt-24 px-6">
          <Contact darkMode={darkMode} />
        </section>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;