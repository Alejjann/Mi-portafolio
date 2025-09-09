import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
const [darkMode, setDarkMode] = useState<boolean>(false);


return (
<div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} font-sans min-h-screen transition-colors`}>
<Header darkMode={darkMode} setDarkMode={setDarkMode} />
<Hero />
<About />
<Projects darkMode={darkMode} />
<Blog darkMode={darkMode} />
<Contact darkMode={darkMode} />
<Footer darkMode={darkMode} />
</div>
);
};


export default App;