import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="fixed top-0 left-0 h-13 w-full z-50 bg-white dark:bg-gray-900 shadow">
    <nav className="p-3 flex  justify-between items-center shadow border-b-2 border-gray-300">
      <h1 className="text-xl o-0 font-bold font-montserrat">Khushal Chauhan</h1>
      <ul className="flex">
        <li className="mx-2 font-extralight"><Link to="/">Home</Link></li>
        <li  className="mx-2 font-extralight"><Link to="/About" >About</Link></li>
        <li  className="mx-2 font-extralight"><Link to="/Contact">Contact</Link></li>
        <li  className="mx-2 font-extralight "><Link to="/Skills" >Skills</Link></li>

      </ul>
      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
    </div>
  );
}
