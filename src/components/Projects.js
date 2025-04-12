import React from "react";
import rapidGarageImg from "../assets/rapid-garage.jpg";

const Projects = () => (
  <section id="projects" className="section px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 w-64 mx-auto text-center hover:shadow-lg transition-shadow duration-300">
      <a href="https://rapidgaragedoors.com" target="_blank" rel="noopener noreferrer">
        <img
          src={rapidGarageImg}
          alt="Rapid Garage Doors"
          className="w-full h-28 object-cover rounded-md mb-3"
        />
      </a>
      <h2 className="text-md font-semibold">Rapid Garage Doors</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        Small business site with service listings, gallery, and live chat.
      </p>
      <p className="text-xs text-gray-500 mt-1">
        <strong>Stack:</strong> React, Tailwind, Vite
      </p>
    </div>
  </section>
);

export default Projects;
