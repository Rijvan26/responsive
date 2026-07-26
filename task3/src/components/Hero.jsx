import React from "react";

const Hero = () => {
  return (
    <div className=" relative h-screen landing-page ">
      <img
        className="object-fill h-full w-full"
        src="https://i.pinimg.com/1200x/ef/58/b3/ef58b32b5a0333a979b6a3d44eb9a240.jpg"
        alt=""
      />
      <div className=" px-2 py-1 md:px-5 lg:py-2 flex flex-col gap-2 md:gap-3 lg:gap-4 info absolute top-40  transform translate-[-50%, -50%]">
        <h1 className="text-2xl">
          welcome to <br />
          <span className="text-3xl font-bold">Authrntik.</span>
        </h1>
        <p>We help creative build an honest brand & digital platform</p>
        <div className="btns flex flex-col items-center gap-2 lg:gap-5 md:flex-row">
          <button className="lg:px-5 lg:py-4 px-3 py-2 radius-sm bg-black text-white">
            START YOUR JOURNEY
          </button>
          <a className="text-lg flex items-center gap-3.5" href="#">
            Learn more <i class="ri-arrow-right-line text-xl"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
