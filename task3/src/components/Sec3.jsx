import React from "react";

function Sec3() {
  return (
    <div className="sec3 px-4 py-2 md:py-9   grid grid-cols-1 gap-4 place-items-center lg:grid-cols-[repeat(2,1fr)]">
      <div className="sec-heading flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Get started today.</h1>
        <p className="text-sm">
          Introducing the Authrntik Framework TM for creative entrepreneurs.
        </p>
        <div className="sec3-card-container grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] gap-3 w-full">
          <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
            <h3 className="font-semibold text-lg">Authentik Living</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              optio dolorum repellendus placeat nisi minus.
            </p>
          </div>
          <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
            <h3 className="font-semibold text-lg">Authentik Living</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              optio dolorum repellendus placeat nisi minus.
            </p>
          </div>
          <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
            <h3 className="font-semibold text-lg">Authentik Living</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              optio dolorum repellendus placeat nisi minus.
            </p>
          </div>
          <div className="sec3-card border-2 px-4 py-2 border-l-background flex flex-col gap-1 justify-center align-ce">
            <h3 className="font-semibold text-lg">Authentik Living</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              optio dolorum repellendus placeat nisi minus.
            </p>
          </div>
        </div>
      </div>

      <div className="sec3-form px-1 py-2">
        <div className="flex bg-background-light flex-col items-center text-center max-w-[400px]">
          <i className="ri-sketching text-7xl"></i>

          <h3 className="font-bold">Start your journey</h3>

          <p className="w-[75%] mb-2">
            Lorem ipsum dolor sit amet consectetur. Quae debitis maiores ad
            autem rerum.
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
              {" "}
              I accept the <u className="cursor-pointer">
                terms of service
              </u>{" "}
              and <u className="cursor-pointer">privacy policy</u>
            </span>
          </div>

          <button className="mt-5 cursor-pointer bg-black px-4 py-3 uppercase text-white">
            Get started today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
