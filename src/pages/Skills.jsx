import React, { useState } from "react";
import { FaPython } from "react-icons/fa";

const mySkills = [
  {
    title: "HTML/CSS",
    type: "frontend",
    icon: <FaPython />,
  },
  {
    title: "Javascript",
    type: "frontend",
    icon: <FaPython />,
  },
  {
    title: "React",
    type: "frontend",
    icon: <FaPython />,
  },
  {
    title: "Typescript",
    type: "frontend",
    icon: <FaPython />,
  },
  {
    title: "Tailwind CSS",
    type: "frontend",
    icon: <FaPython />,
  },
  {
    title: "Next.js",
    type: "frontend",
    icon: <FaPython />,
  },
  {
    title: "Node.js",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "Express",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "GraphQL",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "Python",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "Django",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "Django-Rest",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "JAVA",
    type: "backend",
  },
  {
    title: "JAVA - spring",
    type: "backend",
    icon: <FaPython />,
  },
  {
    title: "MongoDB",
    type: "database",
    icon: <FaPython />,
  },
  {
    title: "PostgreSQL",
    type: "database",
    icon: <FaPython />,
  },
  {
    title: "SQL-server",
    type: "database",
    icon: <FaPython />,
  },
  {
    title: "Redis",
    type: "database",
    icon: <FaPython />,
  },
  {
    title: "Git/Github",
    type: "tools",
    icon: <FaPython />,
  },
  {
    title: "Docker",
    type: "tools",
    icon: <FaPython />,
  },
  {
    title: "Linux",
    type: "tools",
    icon: <FaPython />,
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
    <div>
      <div className="h-screen">
        <h1 className="w-1/2 m-auto border-t-2 border-gray-200 p-4 text-center mb-5 text-6xl ">
          My skills
        </h1>
        <div className="w-[90%] flex items-center justify-between m-auto mb-5 text-center bg-gray-400 h-15">
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
    </div>
  );
};

export default Skills;
