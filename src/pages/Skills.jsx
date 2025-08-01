import React, { useState } from "react";
import { FaPython } from "react-icons/fa";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiDjango } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { SiRedis } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

const mySkills = [
  {
    title: "HTML/CSS",
    type: "frontend",
    icon: <FaHtml5 />,
  },
  {
    title: "Javascript",
    type: "frontend",
    icon: <RiJavascriptFill />,
  },
  {
    title: "React",
    type: "frontend",
    icon: <FaReact />,
  },
  {
    title: "Typescript",
    type: "frontend",
    icon: <SiTypescript />,
  },
  {
    title: "Tailwind CSS",
    type: "frontend",
    icon: <RiTailwindCssFill />,
  },
  {
    title: "Next.js",
    type: "frontend",
    icon: <RiNextjsFill />,
  },
  {
    title: "Node.js",
    type: "backend",
    icon: <FaNodeJs />,
  },
  {
    title: "Express",
    type: "backend",
    icon: <SiExpress />,
  },
  {
    title: "GraphQL",
    type: "backend",
    icon: <GrGraphQl />,
  },
  {
    title: "Python",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "Django",
    type: "backend",
    icon: <SiDjango />,
  },
  {
    title: "Django-Rest",
    type: "backend",
    icon: <SiDjango />,
  },
  {
    title: "JAVA",
    type: "backend",
    icon: <FaJava />,
  },
  {
    title: "JAVA - spring",
    type: "backend",
    icon: <SiSpring />,
  },
  {
    title: "MongoDB",
    type: "database",
    icon: <SiMongodb />,
  },
  {
    title: "PostgreSQL",
    type: "database",
    icon: <BiLogoPostgresql />,
  },
  {
    title: "SQL-server",
    type: "database",
    icon: <DiMsqlServer />,
  },
  {
    title: "Redis",
    type: "database",
    icon: <SiRedis />,
  },
  {
    title: "Git/Github",
    type: "tools",
    icon: <FaGitAlt />,
  },
  {
    title: "Docker",
    type: "tools",
    icon: <FaDocker />,
  },
  {
    title: "Linux",
    type: "tools",
    icon: <FaLinux />,
  },
];

const Skills = () => {
  const [skills, setSkills] = useState(mySkills);

  const handleClick = (type) => {
    if (type !== "all") {
      const skillByType = mySkills.filter((skill) => skill.type === type);
      setSkills(skillByType);
    } else {
      setSkills(mySkills);
    }
  };

  return (
    <div className="" id="skills">
      <h1 className="w-1/2 m-auto border-t-2 border-gray-200 p-4 text-center mb-5 text-4xl lg:text-6xl ">
        Mis habilidades
      </h1>
      <div className="text-[12px] lg:text-xl w-[90%] flex items-center justify-between m-auto mb-5 text-center bg-gray-400 h-15">
        <h2
          onClick={() => handleClick("all")}
          className="flex-1 text-white border-l-white  cursor-pointer hover:bg-gray-600  h-full flex items-center justify-center"
        >
          All
        </h2>
        <h2
          onClick={() => handleClick("frontend")}
          className="flex-1 text-white border-l-white border-l-2 cursor-pointer hover:bg-gray-600  h-full flex items-center justify-center"
        >
          Frontend
        </h2>
        <h2
          onClick={() => handleClick("backend")}
          className="flex-1 text-white border-l-white border-l-2 cursor-pointer hover:bg-gray-600  h-full flex items-center justify-center"
        >
          Backend
        </h2>
        <h2
          onClick={() => handleClick("database")}
          className="flex-1 text-white border-l-white border-l-2 cursor-pointer hover:bg-gray-600 h-full flex items-center justify-center "
        >
          Database
        </h2>
        <h2
          onClick={() => handleClick("tools")}
          className="flex-1 text-white border-l-white border-l-2 cursor-pointer hover:bg-gray-600  h-full flex items-center justify-center"
        >
          Tools
        </h2>
      </div>
      <div className="w-[90%] m-auto flex  flex-wrap gap-2">
        {skills.map((tech, index) => (
          <div
            index={index}
            className="w-[20rem] m-auto bg-gray-200 mb-5 flex  gap-5 p-5 rounded-2xl hover:bg-purple-400 hover:text-white cursor-pointer"
          >
            <h2>{tech.title}</h2>
            <span>{tech.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
