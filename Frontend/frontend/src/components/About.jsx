import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-black font-abril dark:text-yellow-400">
        About Me
      </h2>
      <p className="max-w-3xl min-w-3xl text-lg leading-relaxed">
        Hello! 👋 I'm <span className="font-semibold text-yellow-400">Khushal Chauhan</span>,  
        a passionate and detail-oriented <span className="font-medium">MERN Stack Developer</span> 
        who loves creating dynamic, responsive, and visually engaging web applications.
      </p>

      <p className="max-w-3xl min-w-3xl text-lg leading-relaxed mt-4">
        I enjoy transforming ideas into real-world digital experiences using 
        <span className="text-blue-500 font-medium "> React.js </span> for the frontend and 
        <span className="text-green-500 font-medium"> Node.js with Express </span> for the backend.
        I also work with <span className="text-yellow-500 font-medium">MongoDB</span> to manage data efficiently.
      </p>

      <p className="max-w-3xl min-w-3xl text-lg leading-relaxed mt-4">
        My goal is to build clean, efficient, and user-friendly applications 
        while continuously learning new technologies and improving my skills.  
        I’m always eager to explore creative ideas and collaborate on innovative projects.
      </p>

      <p className="max-w-3xl text-lg leading-relaxed mt-6 italic text-gray-400">
        “Code is not just about logic — it’s about creativity, expression, and innovation.”
      </p>

      <div className="mt-8">
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-300"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
}
