import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="m-10" id="contact">
      <h1 className="w-1/2 m-auto border-t-2 border-gray-200 p-4 text-center mb-5 text-6xl ">
        Contact me
      </h1>
      <div className="w-[90%] m-auto flex gap-3 items-center">
        <div className="text-sm rounded-3xl p-3 h-[60vh] flex-1 flex flex-col gap-2 bg-cyan-800/80 text-white">
          <h2 className="text-center font-bold text-2xl m-3">
            Contact information
          </h2>
          <div className="flex items-center bg-cyan-800 text-white p-2 rounded-2xl">
            <MdEmail className="mr-5" />
            <div className="">
              <h3>Email</h3>
              <p>cristianandres1496@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center bg-cyan-800 text-white p-2 rounded-2xl">
            <MdEmail className="mr-5" />
            <div className="">
              <h3>Email</h3>
              <p>cristianandres1496@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center bg-cyan-800 text-white p-2 rounded-2xl">
            <MdEmail className="mr-5" />
            <div className="">
              <h3>Email</h3>
              <p>cristianandres1496@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center bg-cyan-800 text-white p-2 rounded-2xl">
            <MdEmail className="mr-5" />
            <div className="">
              <h3>Email</h3>
              <p>cristianandres1496@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center bg-cyan-800 text-white p-2 rounded-2xl">
            <MdEmail className="mr-5" />
            <div className="">
              <h3>Email</h3>
              <p>cristianandres1496@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="p-2 text-2xl">Connect with me</h3>
            <div className="flex gap-2 text-xl">
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="text-sm rounded-3xl p-3 h-[60vh] flex-1 bg-green-400/80 text-white">
          <h2 className="text-center font-bold text-2xl m-3">Send a Message</h2>
          <form className="text-sm ">
            <div className="h-[5rem] flex flex-col">
              <label htmlFor="" className="text-center">
                Your name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-white p-2 outline-none rounded-xl"
              />
            </div>
            <div className="h-[5rem] flex flex-col">
              <label htmlFor="" className="text-center">
                Your email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="border-2 border-white p-2 outline-none rounded-xl"
              />
            </div>
            <div className="h-[8rem] flex flex-col">
              <label htmlFor="" className="text-center">
                Your Message
              </label>
              <textarea
                name=""
                id=""
                className="border-2 border-white p-2 outline-none rounded-xl"
              ></textarea>
            </div>
            <div className="h-[5rem] flex items-center justify-center text-[0.9rem]">
              <p className="rounded-2xl w-auto bg-green-500 cursor-pointer hover:bg-green-700 flex items-center gap-2 p-2">
                Send Message <IoIosSend />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
