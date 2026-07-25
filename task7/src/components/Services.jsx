import React from 'react'

const Services = () => {
  return (
     <section className=" sec4 py-5 border-b-1 border-gray-200 lg:grid lg:grid-cols-2 gap-4">
          <div className="top flex flex-col justify-around">
            <h1 className="font-extralight text-3xl uppercase ">
              Our services
            </h1>
            <div className="card-coanteiner py-3 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(210px,1fr))] lg:gap-4">
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                <h4 className="font-extralight text-xl lg:text-lg uppercase ">
                  branding
                </h4>
                <p className="text-lg lg:text-sm font-extralight  text-gray-200">
                  Establish a strong brand identity that setsyou apart.
                </p>

                <div className="about flex gap-3 items-center ">
                  <i className="bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line"></i>
                  <p className="uppercase text-sm">About Branding</p>
                </div>
              </div>
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                <h4 className="font-extralight text-xl lg:text-lg uppercase ">
                  Ecomerse
                </h4>
                <p className="text-lg lg:text-sm font-extralight  text-gray-200">
                  Develop customized online stores that reflect your brand and
                  vision.
                </p>

                <div className="about flex gap-3 items-center ">
                  <i className="bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line"></i>
                  <p className="uppercase text-sm">About Ecomerse</p>
                </div>
              </div>
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                <h4 className="font-extralight text-xl lg:text-lg uppercase ">
                  campaign
                </h4>
                <p className="text-lg lg:text-sm font-extralight  text-gray-200">
                  Utilize data and analytics to optimize your marketing
                  performance. .
                </p>

                <div className="about flex gap-3 items-center ">
                  <i className="bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line"></i>
                  <p className="uppercase text-sm">About campaign</p>
                </div>
              </div>
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                <h4 className="font-extralight text-xl lg:text-lg uppercase ">
                  social media
                </h4>
                <p className="text-lg lg:text-sm font-extralight  text-gray-200">
                  Create engaging and shareable content that drives brand
                  awareness. .
                </p>

                <div className="about flex gap-3 items-center ">
                  <i className="bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line"></i>
                  <p className="uppercase text-sm">About social media</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom ">
            <div className="imgdiv lg:p-5  ">
              <img
                className="object-fill w-full h-auto"
                src="
https://assets-global.website-files.com/63fd93c920392238faa118c4/63ff013040f8ceac6b7f98d1_home-services-p-1600.webp            "
                alt=""
              />
            </div>
          </div>
        </section>
  )
}

export default Services