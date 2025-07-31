import React from "react";
import { FaGithub } from "react-icons/fa";

const myProjects = [
  {
    project: "project1",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatibus. Illum.",
    link: "https://github.com/cristianalvarez1404?tab=repositories",
    img: "./project.jpg",
    categories: ["react", "nodejs", "typescript"],
  },
  {
    project: "project2",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatibus. Illum.",
    link: "https://github.com/cristianalvarez1404?tab=repositories",
    img: "./project.jpg",
    categories: ["react", "nodejs", "typescript"],
  },
  {
    project: "project3",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatibus. Illum.",
    link: "https://github.com/cristianalvarez1404?tab=repositories",
    img: "./project.jpg",
    categories: ["react", "nodejs", "typescript"],
  },
  {
    project: "project4",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatibus. Illum.",
    link: "https://github.com/cristianalvarez1404?tab=repositories",
    img: "./project.jpg",
    categories: ["react", "nodejs", "typescript"],
  },
  {
    project: "project5",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatibus. Illum.",
    link: "https://github.com/cristianalvarez1404?tab=repositories",
    img: "./project.jpg",
    categories: ["react", "nodejs", "typescript"],
  },
  {
    project: "project6",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatibus. Illum.",
    link: "https://github.com/cristianalvarez1404?tab=repositories",
    img: "./project.jpg",
    categories: ["react", "nodejs", "typescript"],
  },
];

const Projects = () => {
  return (
    <div className="" id="project">
      <h1 className="w-1/2 m-auto text-center border-t-2 border-gray-200 p-4 text-center mb-5 text-6xl ">
        Projects
      </h1>
      <div className="w-[90%] m-auto flex flex-wrap gap-8">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="w-[350px] h-auto flex flex-col items-center bg-green-500/70 text-white rounded-2xl p-2"
          >
            <img
              src={project.img}
              alt=""
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <h3 className="text-2xl p-2 font-bold">{project.project}</h3>
            <p className="text-sm text-center mb-2">{project.description}</p>
            <div className="flex gap-2 p-1">
              {project.categories.map((c, index) => (
                <span
                  className="text-[0.8rem] bg-green-700/90 rounded-sm p-1"
                  key={index}
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="text-2xl mb-2 cursor-pointer">
              <FaGithub className="text-gray-800" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <a
          href="/"
          className="w-auto p-2 rounded-2xl text-gray-700 text-center bg-green-300 cursor-pointer"
        >
          Check My Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
