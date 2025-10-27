import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-all">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Resume /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
