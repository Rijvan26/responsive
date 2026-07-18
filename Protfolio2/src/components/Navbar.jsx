import React from "react";

const Navbar = () => {
  return (
    <header className=" w-full flex justify-center items-center ">
      <nav className=" w-full h-7 px-2 py-8 flex justify-between  items-center bg-black  ">
        <div className="logo text-xl lg:text-3xl ">
          <h1 className="text-red-700 lg:text-3xl text-xl lg:font-extrabold">Rizwan Khan</h1>
        </div>

        <ul className=" flex gap-2 items-center lg:gap-3  text-white text-[10px] md:text-[18px] lg:text-xl ">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
