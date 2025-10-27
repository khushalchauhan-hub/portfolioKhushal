import React from "react";
import image from "../assests/images/images.jpg"

const projects = [
  {
    title: "Wish market",
    description:
      "A full-stack MERN e-commerce website with user authentication, product management, and secure checkout.",
    
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <div className=" gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
