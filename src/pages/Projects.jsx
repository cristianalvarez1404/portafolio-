import React from "react";
import { FaGithub } from "react-icons/fa";

const myProjects = [
  {
    project: "Back - Ecommerce",
    description:
      "Ecommerce de productos con cálculo de inventario por producto y creacion de carrito de productos.",
    link: "https://github.com/cristianalvarez1404/e-commerce_project",
    img: "./1.jpg",
    categories: ["typescript", "nodejs", "mongoose", "JWT", "express"],
  },
  {
    project: "Java - Spring: API customers",
    description: "API en framework spring boot con model MVC",
    link: "https://github.com/cristianalvarez1404/java_project_portfolio",
    img: "./2.png",
    categories: ["Java", "Spring boot", "JPA", "Mysql"],
  },
  {
    project: "Web contable",
    description:
      "Web de contabilidad con para crear post en diferentes categorias. La web tambien tiene integrado dos liquidadores de nómina.",
    link: "https://github.com/cristianalvarez1404/web-contaActual",
    img: "./3.png",
    categories: [
      "Typescript",
      "Express",
      "Postgresql",
      "React",
      "Tailwindcss",
      "Zustand",
    ],
  },
  {
    project: "Django TODO",
    description:
      "Prouecto TODO donde se aplican los conceptos del CRUD para crear, actualizar, eliminar y leer las tasks.",
    link: "https://github.com/cristianalvarez1404/TODO-django",
    img: "./4.png",
    categories: ["Python", "Django", "CSS", "Javascript"],
  },
  {
    project: "Blog APP",
    description:
      "Blog en React-vite con sistema de autenticación para crear tasks.Se integra tambien react-query.",
    link: "https://github.com/cristianalvarez1404/blog-app_js",
    img: "./2.png",
    categories: [
      "React",
      "React-query",
      "Tailwindcss",
      "Mysql",
      "MongoDB",
      "Express",
    ],
  },
  {
    project: "API Web Excel- V1",
    description:
      "API en django-rest para crear artículos de excel con shorcuts,funciones y categorias.",
    link: "https://github.com/cristianalvarez1404/web-excel_project",
    img: "./5.jpg",
    categories: ["Python", "Django-Rest", "POO", "API Rest"],
  },
  {
    project: "API Web Excel- V2",
    description:
      "API en django-rest para crear artículos de excel con shorcuts,funciones y categorias. Se realiza con viewsets y se incluyen paginación y filters.",
    link: "https://github.com/cristianalvarez1404/web_excel_project_v2",
    img: "./5.jpg",
    categories: ["Python", "Django-Rest", "POO", "API Rest"],
  },
  {
    project: "API Students Spring",
    description:
      "API en Spring para crear, actualizar, eliminar y buscar estudiantes.",
    link: "https://github.com/cristianalvarez1404/student_project_spring",
    img: "./2.png",
    categories: ["Java", "Spring", "API Rest"],
  },
  {
    project: "Clothing-e-commerce",
    description:
      "App para venta de ropa donde se puede crear orden, productos,questions y autenticación",
    link: "https://github.com/cristianalvarez1404/clothing-e-commerce",
    img: "./2.png",
    categories: [
      "Express",
      "MongoDB",
      "JWT",
      "React-vite",
      "Tailwindcss",
      "axios",
    ],
  },
  {
    project: "API Django Rest",
    description:
      "API de stock en Django rest donde se crea el producto, orden y el item de la orden",
    link: "https://github.com/cristianalvarez1404/API-Python",
    img: "./2.png",
    categories: ["Django-Rest", "POO", "SQlite", "API-rest"],
  },
];

const Projects = () => {
  return (
    <div className="" id="project">
      <h1 className="w-1/2 m-auto text-center border-t-2 border-gray-200 p-4 mb-5 text-4xl lg:text-6xl ">
        Projects
      </h1>
      <div className="w-[90%] m-auto flex flex-wrap gap-8">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="w-[350px] h-auto flex flex-col items-center bg-transparent text-gray-500 rounded-2xl p-2 border-gray-300 border-2"
          >
            <img
              src={project.img}
              alt=""
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <h3 className="text-2xl p-2 font-bold text-center">
              {project.project}
            </h3>
            <p className="text-sm text-center mb-2">{project.description}</p>
            <div className="flex flex-wrap items-center justify-center gap-2 p-1">
              {project.categories.map((c, index) => (
                <span
                  className="cursor-pointer hover:opacity-80 text-[0.8rem] bg-green-700/90 text-white rounded-sm p-1"
                  key={index}
                >
                  {c}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="blank"
              className="text-2xl mb-2 cursor-pointer"
            >
              <FaGithub className="text-gray-800" />
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <a
          href="https://github.com/cristianalvarez1404?tab=repositories"
          target="blank"
          className="w-auto p-2 rounded-2xl text-gray-700 text-center bg-green-300 cursor-pointer"
        >
          Check My Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
