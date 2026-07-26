import React from "react";

const Sec2 = () => {
  return (
    <div className="sec2 px-4 py-2">
      <div className="sec2heding flex flex-col px-3 py-2">
        <h1 className="text-2xl font-semibold">Start your journey.</h1>
        <p className="text-sm lg:w-[50%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ratione
          autem rerum facilis recusandae deserunt eum laudantium quos non! Ipsa
          ipsum voluptate cumque dignissimos id reiciendis nihil nemo aliquid
          illum.
        </p>
      </div>
      <div className="card-conatainer grid grid-cols-1 md:grid-cols-2 gap-3 items-center lg:grid-cols-3">
        <div className="card flex justify-center items-center w-full flex-col gap-3 bg-background px-3 py-4">
          <div className="card-heading text-xl">
            <i class="ri-hotel-line"></i>
            <h2>Be Inspired</h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quaerat quidem asperiores et eum vitae! Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
        <div className="card flex flex-col gap-3 bg-background px-3 py-4">
          <div className="card-heading text-xl">
            <i class="ri-hotel-line"></i>
            <h2>Be Inspired</h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quaerat quidem asperiores et eum vitae! Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
        <div className="card flex flex-col gap-3 bg-background px-3 py-4">
          <div className="card-heading text-xl">
            <i class="ri-hotel-line"></i>
            <h2>Be Inspired</h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quaerat quidem asperiores et eum vitae! Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
      </div>
      <a className="text-md text-underline flex items-center gap-2" href="#">
        take the first step today{" "}
        <i class="ri-arrow-right-line text-xl"></i>{" "}
      </a>
    </div>
  );
};

export default Sec2;
