import React from "react";
import { useState } from "react";

export default function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "React.js",
      subskills: ["React ES6", "React Components", "React Props", "React Hooks", "Context API"],
    },
    {
      name: "Node.js",
      subskills: ["Express Integration", "Middleware", "Routing", "APIs"],
    },
    {
      name: "Express.js",
      subskills: ["Routing", "Error Handling", "Middleware"],
    },
    {
      name: "MongoDB",
      subskills: ["Mongoose", "Schemas", "Aggregation", "Atlas"],
    },
    { name: "JavaScript (ES6+)",
      subskills: ["Arrow Functions", "Promises", "Async/Await", "Modules"],
    },
    {
      name: "Tailwind CSS",
      subskills: ["Utility Classes", "Responsive Design", "Dark Mode", "Custom Themes"],
    },
  ];
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center ">
      {/* Water-like background */}
      <div className="absolute bg-gray-400 opacity-5"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg bg-white/30 dark:bg-gray-900/40 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          My Skills
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-200 text-lg">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="hover:text-blue-500 transition-colors duration-200 relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill.name}

              {/* Show subskills on hover */}
              {hoveredSkill === index && (
                <ul className="flex flex-col left-6 top-6 bg-white/80 dark:bg-gray-800/90 rounded-lg shadow-md p-3 mt-2 text-sm text-gray-700 dark:text-gray-200 space-y-1 transition-opacity duration-300">
                  {skill.subskills.map((sub, i) => (
                    <li key={i} className="hover:text-blue-400">
                      • {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
