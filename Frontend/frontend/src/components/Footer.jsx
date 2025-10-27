import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-3 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left Side - Name or Logo */}
        <h2 className="text-sm font-semibold tracking-wide">©2025 KhushalChauhan</h2>

        {/* Center - Social Links */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 dark:hover:text-white transition-all duration-300"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="mailto:khushalchauhan221@gmail.com"
            className="hover:text-red-500 dark:hover:text-red-400 transition-all duration-300"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Right Side - Text */}
        <p className="text-sm mt-4 md:mt-0 opacity-75">
          Built with ❤️ using mern
        </p>
      </div>
    </footer>
  );
}
