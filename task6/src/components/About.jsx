import React from "react";

const About = () => {
  return (
    <section className="sec2 max-w-[80%] md:py-9 flex flex-col gap-5 items-center   justify-center  py-3 text-black">
      <div className="info-container max-w-[600px]  flex flex-col gap-5">
        <h1 className="text-2xl text-center capitalize font-medium">
          who we are
        </h1>
        <p className="text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          repellendus eius laborum delectus, eum, molestiae non repellat nisi
          minus porro mollitia, ex modi sunt magnam! Impedit cupiditate nam
          saepe quidem.
        </p>
        <a className="text-md underline capitalize" href="#">
          read our story
        </a>
      </div>
    </section>
  );
};

export default About;
