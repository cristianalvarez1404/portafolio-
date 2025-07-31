import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="m-10" id="contact">
      <h1 className="w-1/2 m-auto border-t-2 border-gray-200 p-4 text-center mb-5 text-6xl ">
        Contact me
      </h1>
      <div className="w-[90%] m-auto flex gap-3 items-center">
        <div className="text-sm rounded-3xl p-3 h-[60vh] flex-1 flex flex-col gap-4 bg-transparent border-2 border-gray-400 text-gray-500">
          <h2 className="text-center font-bold text-2xl m-3">
            Información de contacto
          </h2>
          <div className="cursor-pointer hover:opacity-80 flex items-center bg-cyan-800/80 text-white p-2 rounded-2xl">
            <MdEmail className="mr-5 text-2xl" />
            <div className="">
              <h3>Email</h3>
              <p>cristianandres1496@gmail.com</p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/cristian-andres-alvarez-jaramillo-407007253/"
            target="blank"
            className="cursor-pointer hover:opacity-80 flex items-center bg-cyan-800/80 text-white p-2 rounded-2xl"
          >
            <FaLinkedin className="mr-5 text-2xl" />
            <div className="">
              <h3>Linkedin</h3>
              <p>Linkedin personal</p>
            </div>
          </a>
          <a
            href="https://github.com/cristianalvarez1404"
            target="blank"
            className="cursor-pointer hover:opacity-80 flex items-center bg-cyan-800/80 text-white p-2 rounded-2xl"
          >
            <FaGithub className="mr-5 text-2xl" />
            <div className="">
              <h3>Github</h3>
              <p>cristianalvarez1404</p>
            </div>
          </a>
          <a
            href="https://cristianalvarez1404.github.io/portafolio-/"
            target="blank"
            className="cursor-pointer hover:opacity-80 flex items-center bg-cyan-800/80 text-white p-2 rounded-2xl"
          >
            <FaFileCode className="mr-5" />
            <div className="">
              <h3>Web portafolio</h3>
              <p>Portafolio</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/cristian_alvarez_j/"
            target="blank"
            className="cursor-pointer hover:opacity-80 flex items-center bg-cyan-800/80 text-white p-2 rounded-2xl"
          >
            <GrInstagram className="mr-5" />
            <div className="">
              <h3>Instagram</h3>
              <p>cristian_alvarez_j</p>
            </div>
          </a>
          <div className="flex flex-col items-center">
            <h3 className="p-2 text-2xl">Contáctame</h3>
            <div className="flex gap-2 text-xl">
              <a href="mailto:cristianandres1496@gmail.com" target="blank">
                <MdEmail />
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-andres-alvarez-jaramillo-407007253/"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/cristianalvarez1404" target="blank">
                <FaGithub />
              </a>
              <a
                href="https://cristianalvarez1404.github.io/portafolio-/"
                target="blank"
              >
                <FaFileCode />
              </a>
              <a
                href="https://www.instagram.com/cristian_alvarez_j/"
                target="blank"
              >
                <GrInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="text-sm rounded-3xl p-3 h-[60vh] flex-1 bg-gray-200/50 text-gray-600 border-2 border-gray-500">
          <h2 className="text-center font-bold text-2xl m-3">
            Enviame un mensaje
          </h2>
          <form className="text-sm ">
            <div className="h-[5rem] flex flex-col">
              <label htmlFor="" className="text-left text-sm mb-2">
                Tu nombre
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-gray-400 p-2 outline-none rounded-xl"
              />
            </div>
            <div className="h-[5rem] flex flex-col">
              <label htmlFor="" className="text-left text-sm mb-2">
                Tu email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="border-2 border-gray-400 p-2 outline-none rounded-xl"
              />
            </div>
            <div className="h-[8rem] flex flex-col">
              <label htmlFor="" className="text-left text-sm mb-2">
                Tu mensaje
              </label>
              <textarea
                name=""
                id=""
                className="border-2 border-gray-400 p-2 outline-none rounded-xl"
              ></textarea>
            </div>
            <div className="h-[5rem] flex items-center justify-center text-[0.9rem]">
              <p className="rounded-2xl w-auto bg-green-500/70 text-white cursor-pointer hover:bg-green-700/50 flex items-center gap-2 p-2">
                Enviar mensaje <IoIosSend />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
