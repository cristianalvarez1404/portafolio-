import { TbBracketsAngle } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="mb-20" id="about">
      <h1 className="w-1/2 m-auto border-t-2 border-gray-200 p-4 text-center mb-5 text-6xl ">
        Acerca de mí
      </h1>
      <div className="w-[90%] m-auto flex items-center">
        <div className="flex-1 p-2 ">
          <h2 className="text-3xl mb-5">
            Desarrollador y creador de soluciones tecnológicas
          </h2>
          <p className="mb-3 space-y-4 leading-7 text-gray-700">
            A lo largo de estos últimos tres años, he estado desarrollando mis
            habilidades como programador en áreas clave como frontend, backend,
            bases de datos y herramientas del desarrollo de software. Mi
            formación ha sido completamente autodidacta, utilizando una
            combinación de portales en línea, proyectos personales,
            documentación técnica y cursos ofrecidos por plataformas digitales.
          </p>
          <p className="mb-3 space-y-4 leading-7 text-gray-700">
            Aunque he avanzado mucho, soy consciente de que aún me queda un
            largo camino por recorrer. Mi objetivo es seguir creciendo en este
            entorno dinámico, enfrentando nuevos retos y aplicando mis
            conocimientos para crear soluciones eficaces.
          </p>
          <p className="mb-3 space-y-4 leading-7 text-gray-700">
            Mis intereses se centran en la colaboración, la proactividad y el
            trabajo en equipo. Creo firmemente que el crecimiento personal y
            profesional van de la mano, y estoy siempre en busca de nuevas
            oportunidades para mejorar y contribuir al éxito de proyectos.
          </p>
          <div className="flex gap-4 text-gray-800">
            <a
              href="#contact"
              className="bg-green-300 rounded-2xl p-2 cursor-pointer hover:bg-green-500 hover:text-white text-sm font-bold"
            >
              Contactar
            </a>
            <button className="bg-purple-400 text-white font-bold rounded-2xl p-2 cursor-pointer hover:bg-green-500 hover:text-white text-sm">
              Descargar CV
            </button>
          </div>
        </div>

        <div className="flex-1 p-2 ">
          <div className="flex items-center gap-4 bg-green-200 p-5 rounded-2xl mb-3 cursor-pointer hover:bg-green-300">
            <TbBracketsAngle className="text-3xl" />
            <div className="">
              <h3 className="text-center font-bold">Backend y APIs</h3>
              <p className="text-gray-700">
                Desarrollo de APIs REST y GraphQL utilizando tecnologías como
                Java, Python y Node.js y sus diferentes frameworks como express,
                django y spring para crear aplicaciones escalables y eficientes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-purple-200 p-5 rounded-2xl mb-3 cursor-pointer hover:bg-green-300">
            <FaUser className="text-2xl" />
            <div className="">
              <h3 className="text-center font-bold">Desarrollo Web</h3>
              <p className="text-gray-700">
                Diseño y creación de sitios web modernos utilizando HTML, CSS,
                JavaScript, React y TypeScript, ofreciendo experiencias
                interactivas.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-green-200 p-5 rounded-2xl mb-3 cursor-pointer hover:">
            <FaBagShopping className="text-2xl" />
            <div className="">
              <h3 className="text-center font-bold">Bases de Datos (DB)</h3>
              <p className="text-gray-700">
                Diseño, optimización y gestión de bases de datos SQL y NoSQL,
                para gestion de la información.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-purple-200 p-5 rounded-2xl mb-3 cursor-pointer hover:bg-green-300">
            <FaFileCode className="text-2xl" />
            <div className="">
              <h3 className="text-center font-bold">
                Contenedores, entornos y sistemas
              </h3>
              <p className="text-gray-700">
                Uso de Docker para la creación de entornos de desarrollo y
                despliegue consistentes, y manejo de sistemas Linux para la
                gestión eficiente de servidores y aplicaciones en producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
