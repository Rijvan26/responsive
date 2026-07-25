import React from 'react'

const Hero = () => {
  return (
    <div className="landing-page flex flex-col justify-center w-full  items-center">
       <div className="imgdiv">
            <img className='object-fill w-full h-auto' src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fed275667d13010afac1ac_heading-fashionwerk.svg" alt="" />
          </div>
          <div className="infocontanier lg:grid lg:grid-cols-2 gap-5 place-items-center ">
            <div className="top lg:order-2 ">
          <div className="subheading flex justify-between items-center py-2 w-full">
            <p>Branding Agency</p>
            <p>From Berlin</p>
          </div>
          <div className="imgdiv lg:p-3">
            <img className='object-fill w-full h-auto' src="https://assets-global.website-files.com/63fd93c920392238faa118c4/63fed72aa75a04d4f083eb4a_home-hero-p-1600.webp" alt="" />
          </div>
          </div>
          <div className="bottom flex flex-col gap-3 py-4 justify-between h-auto]: lg:order-1">
            <div className='flex flex-col gap-3 py-4'>
              <h1 className='font-extralight text-3xl uppercase '>
              Unleash­ing Your Brand’s Potential
            </h1>
            <p className='text-lg font-extralight'>
              Comprehensive branding solutions that help fashion, lifestyle, and luxury brands connect with their target audience.
</p>
            </div>

            <div className="lists ">
              <div className="cards lg:text-xl flex justify-between py-3 border-b-2 border-white">
                <p>01</p>
                <p className='uppercase'>branding</p>
              </div>
              <div className="cards lg:text-xl  flex justify-between py-3 border-b-2 border-white">
                <p>02</p>
                <p className='uppercase'>campaign</p>
              </div>
              <div className="cards  lg:text-xl flex justify-between py-3 border-b-2 border-white">
                <p>03</p>
                <p className='uppercase'>social media</p>
              </div>
              <div className="cards lg:text-xl  flex justify-between py-3 border-b-2 border-white">
                <p>04</p>
                <p className='uppercase'>Ecomerce</p>
              </div>
            </div>
          </div>
          </div>
        </div>
  )
}

export default Hero