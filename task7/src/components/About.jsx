import React from 'react'

const About = () => {
  return (
    <section className="flex  flex-col gap-5 lg:grid lg:grid-cols-2 place-items-center">
          <div className="imgdiv lg:p-5">
            <img
              className="object-fit w-full h-auto"
              src="https://assets-global.website-files.com/63fd93c920392238faa118c4/63ff0189107c3469a831cb0a_home-about-p-500.webp"
              alt=""
            />
          </div>
          <div className="info flex flex-col justify-center items-center gap-5">
            <div className="heading flex gap-3 justify-center  items-start w-full">
              <h1 className="font-extralight text-3xl uppercase lg:text-[5rem] ">
                Tailored Brand Solu­tions
              </h1>
            </div>
            <p className="text-lg font-extralight lg:text-xl text-gray-200">
              We believe that every brand has a unique story to tell and our
              mission is to help you bring that story to life through
              exceptional branding, marketing, e-commerce, and social media
              strategies.
            </p>
          </div>
        </section>

  )
}

export default About