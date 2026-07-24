import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-4">
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

        <div className="sec2 px-4 py-2">
          <div className="sec2heding flex flex-col px-3 py-2">
            <h1 className="text-2xl font-semibold">Start your journey.</h1>
          <p className="text-sm lg:w-[50%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illo ratione autem rerum facilis recusandae deserunt 
            eum laudantium quos non! Ipsa ipsum voluptate cumque 
            dignissimos id reiciendis nihil nemo aliquid illum.</p>
          </div>
          <div className="card-conatainer grid grid-cols-1 md:grid-cols-2 gap-3 items-center lg:grid-cols-3">
            <div className="card flex justify-center items-center w-full flex-col gap-3 bg-background px-3 py-4">
              <div className="card-heading text-xl">
                <i class="ri-hotel-line"></i>
                <h2>Be Inspired</h2>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat quidem asperiores et eum vitae! Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="card flex flex-col gap-3 bg-background px-3 py-4">
              <div className="card-heading text-xl">
                <i class="ri-hotel-line"></i>
                <h2>Be Inspired</h2>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat quidem asperiores et eum vitae! Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="card flex flex-col gap-3 bg-background px-3 py-4">
              <div className="card-heading text-xl">
                <i class="ri-hotel-line"></i>
                <h2>Be Inspired</h2>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat quidem asperiores et eum vitae! Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <a className="text-md text-underline flex items-center gap-2" href="#">take the first step today <i class="ri-arrow-right-line text-xl"></i> </a>
        </div>

        <div className="sec3 px-4 py-2 md:py-9   grid grid-cols-1 gap-4 place-items-center lg:grid-cols-[repeat(2,1fr)]">
             <div className="sec-heading flex flex-col gap-3">
              <h1  className="text-2xl font-semibold">Get started today.</h1>
              <p className="text-sm">Introducing the Authrntik Framework TM for creative entrepreneurs.</p>
             <div className="sec3-card-container grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] gap-3 w-full">
              
                <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
                <h3 className="font-semibold text-lg">Authentik Living</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio dolorum repellendus placeat nisi minus.</p>
              </div>
               <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
                <h3 className="font-semibold text-lg">Authentik Living</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio dolorum repellendus placeat nisi minus.</p>
              </div>
              <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
                <h3 className="font-semibold text-lg">Authentik Living</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio dolorum repellendus placeat nisi minus.</p>
              </div>
               <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
                <h3 className="font-semibold text-lg">Authentik Living</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio dolorum repellendus placeat nisi minus.</p>
              </div>
               
             </div>
             </div>

           <div className="sec3-form px-1 py-2">
        <div className="flex bg-background-light flex-col items-center text-center max-w-[400px]">
  <i className="ri-sketching text-7xl"></i>

  <h3 className="font-bold">Start your journey</h3>

  <p className="w-[75%] mb-2">
    Lorem ipsum dolor sit amet consectetur. Quae debitis maiores ad autem rerum.
  </p>

  <input
    type="text"
    className="px-3 py-3 bg-zinc-200 w-[75%] mb-3"
    placeholder="First Name"
  />

  <input
    type="email"
    className="px-3 py-3 bg-zinc-200 w-[75%] mb-3"
    placeholder="Email Address"
  />

  <div className="w-[80%]">
    <input type="checkbox" />
    <span>
      {" "}I accept the{" "}
      <u className="cursor-pointer">terms of service</u> and{" "}
      <u className="cursor-pointer">privacy policy</u>
    </span>
  </div>

  <button className="mt-5 cursor-pointer bg-black px-4 py-3 uppercase text-white">
    Get started today
  </button>
</div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
