import React from "react";

const Navbar = () => {
  return (
    <div className="font-bold bg-emerald-500 text-white h-15 flex justify-between items-center p-2 sticky top-0">
      <div className="text-sm lg:text-2xl">Cristian - Portafolio</div>
      <div className="hidden lg:flex lg:gap-2">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
