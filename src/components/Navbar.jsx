import React from "react";

const Navbar = () => {
  return (
    <div className="font-bold bg-emerald-500 text-white h-15 flex justify-between items-center p-2">
      <div>Cristian - Portafolio</div>
      <div className="flex gap-2">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
