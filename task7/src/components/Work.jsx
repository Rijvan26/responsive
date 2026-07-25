import React from 'react'

const Work = () => {
  return (
    <section className=" sec5 flex flex-col gap-5">
          <div className=" py-3">
            <img
              className="object-fill w-full h-auto"
              src="
https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fedc0657c2b7a94573a859_heading-selected-work.svg  
    "
              alt=""
            />
          </div>

          <div className="sec4-container lg:p-4 flex flex-col lg:grid lg:grid-cols-3 gap-5">
            <div className="">
              <img
                className="object-fill w-full h-auto"
                src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401a5abcc00dd606d1af379_work-01-thumb-01.webp   "
                alt=""
              />
            </div>
            <div className="hidden lg:block">
              <img
                className="object-fill w-full h-auto"
                src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401a5adcb82400906ca21b1_work-01-thumb-02-p-500.webp  "
                alt=""
              />
            </div>

            <div className="card flex flex-col gap-2  flex flex-col justify-between h-full py-4">
              <div>
                {" "}
                <h4 className="font-extralight text-xl  lg:text-lg uppercase ">
                  Sage
                </h4>
                <p className="text-lg lg:text-sm font-extralight  text-gray-200">
                  Social Media Campaign: Building brand awareness and
                  engagement..
                </p>
              </div>

              <div className="about flex gap-3 items-center ">
                <i className="bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line"></i>
                <p className="uppercase text-sm">About Branding</p>
              </div>
            </div>

            <div className=" lg:order-3">
              <img
                className="object-fill w-full h-auto"
                src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401aab738e8cf1ec2616298_work-02-thumb-01.webp  "
                alt=""
              />
            </div>
            <div className="hidden lg:block lg:order-2">
              <img
                className="object-fill w-full h-auto"
                src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401aab9b421f8fa45424d65_work-02-thumb-02-p-500.webp "
                alt=""
              />
            </div>

            <div className="card flex flex-col justify-between h-full gap-2 lg:order-1   py-4">
              <div>
                <h4 className="font-extralight text-xl lg:text-lg uppercase ">
                  Azure
                </h4>
                <p className="text-lg lg:text-sm font-extralight  text-gray-200">
                  Website Redesign: Improving user experience and modernizing
                  design.
                </p>
              </div>

              <div className="about flex gap-3 items-center ">
                <i className="bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line"></i>
                <p className="uppercase text-sm">About Branding</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Work