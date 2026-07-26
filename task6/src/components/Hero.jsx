import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://sheriyans-task.vercel.app/img/WhatsApp%20Image%202025-07-09%20at%2019.42.34.jpeg")',
      }}
      className="relative w-full landing-page flex justify-start  flex-col  h-screen bg-cover bg-center bg-no-repeat"
    >
      <Navbar />
      <div className=" text-amber-100 text-2xl md:text-3xl absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="whitespace-nowrap uppercase">Calistro Park</h1>
      </div>
    </section>
  );
};

export default Hero;
