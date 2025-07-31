import { TbBracketsAngle } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="" id="about">
      <h1 className="w-1/2 m-auto border-t-2 border-gray-200 p-4 text-center mb-5 text-6xl ">
        About me
      </h1>
      <div className="w-[90%] h-screen m-auto flex  items-center">
        <div className="flex-1 p-2 ">
          <h2 className="text-3xl mb-5">
            Passionate Web Developer & Tech Creator
          </h2>
          <p className="mb-3 space-y-4 leading-7 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
            culpa natus vero aliquid placeat nulla praesentium consectetur, aut
            sequi eaque? Suscipit iure perferendis pariatur fuga, id autem cum
            veniam.
          </p>
          <p className="mb-3 space-y-4 leading-7 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
            culpa natus vero aliquid placeat nulla praesentium consectetur, aut
            sequi eaque? Suscipit iure perferendis pariatur fuga, id autem cum
            veniam.
          </p>
          <p className="mb-3 space-y-4 leading-7 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
            culpa natus vero aliquid placeat nulla praesentium consectetur, aut
            sequi eaque? Suscipit iure perferendis pariatur fuga, id autem cum
            veniam.
          </p>
          <div className="flex gap-4 text-gray-800">
            <button className="bg-green-300 rounded-2xl p-2 cursor-pointer hover:bg-green-500 hover:text-white text-sm font-bold">
              Get In Touch
            </button>
            <button className="bg-purple-400 font-bold rounded-2xl p-2 cursor-pointer hover:bg-green-500 hover:text-white text-sm">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <div className="flex-1 p-2 ">
            <div className="flex items-center gap-4 bg-green-200 p-5 rounded-2xl mb-3 cursor-pointer hover:bg-green-300">
              <TbBracketsAngle className="text-2xl" />
              <div className="">
                <h3 className="text-center font-bold">Web Development</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  eveniet.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-purple-200 p-5 rounded-2xl mb-3 cursor-pointer hover:bg-green-300">
              <FaUser className="text-2xl" />
              <div className="">
                <h3 className="text-center font-bold">Web Development</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  eveniet.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-200 p-5 rounded-2xl mb-3 cursor-pointer hover:">
              <FaBagShopping className="text-2xl" />
              <div className="">
                <h3 className="text-center font-bold">Web Development</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  eveniet.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-purple-200 p-5 rounded-2xl mb-3 cursor-pointer hover:bg-green-300">
              <FaFileCode className="text-2xl" />
              <div className="">
                <h3 className="text-center font-bold">Web Development</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  eveniet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
