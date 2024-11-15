import React from "react";
import flipcart from "../assets/images/flipcart.png"; 

const Project = () => {
  const project = {
    name: "Flipkart Clone",
    description:
      "A fully functional e-commerce website inspired by Flipkart.",
    technologies: ["Html", "Javascript", "CSS",],
  };

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Project</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Highlighted Work</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-8 px-5 mx-auto items-center relative">
        {/* Project Image */}
        <div className="w-1/2">
          <img
            src={flipcart}
            alt="Flipkart Clone"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="w-1/2 bg-gray-700 p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
          <p className="text-gray-200 text-sm mb-6">{project.description}</p>

          <h4 className="text-xl font-semibold">Technologies Used:</h4>
          <ul className="text-gray-300 mt-2 mb-4">
            {project.technologies.map((tech, i) => (
              <li key={i} className="text-sm">
                • {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;

