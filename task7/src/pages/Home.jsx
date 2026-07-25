import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <main className='flex flex-col gap-5'>
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

        <section className='flex  flex-col gap-5 lg:grid lg:grid-cols-2 place-items-center'>
          <div className="imgdiv lg:p-5">
            <img className='object-fit w-full h-auto' src="https://assets-global.website-files.com/63fd93c920392238faa118c4/63ff0189107c3469a831cb0a_home-about-p-500.webp" alt="" />
          </div>
          <div className="info flex flex-col justify-center items-center gap-5">
          <div className="heading flex gap-3 justify-center  items-start w-full">
              <h1 className='font-extralight text-3xl uppercase lg:text-[5rem] '>
             Tailored Brand Solu­tions</h1>
          </div>
            <p className='text-lg font-extralight lg:text-xl text-gray-200'>
              We believe that every brand has a unique story to tell and our mission is to help you bring that story to life through exceptional branding, marketing, e-commerce, and social media strategies.</p>
          </div>
        </section>

        <section className=' sec4 py-5 border-b-1 border-gray-200 lg:grid lg:grid-cols-2 gap-4'>
              <div className="top flex flex-col justify-around">
                <h1 className='font-extralight text-3xl uppercase '>
            Our services</h1>
            <div className="card-coanteiner py-3 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(210px,1fr))] lg:gap-4">
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                
               <h4 className='font-extralight text-xl lg:text-lg uppercase '>
                  branding</h4>
            <p className='text-lg lg:text-sm font-extralight  text-gray-200'>
                    Establish a strong brand identity that setsyou apart.</p>

                    <div className="about flex gap-3 items-center ">
                      <i className='bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line'></i>
                      <p className='uppercase text-sm' >About Branding</p>
                    </div>
              </div>
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                
               <h4 className='font-extralight text-xl lg:text-lg uppercase '>
                  Ecomerse</h4>
            <p className='text-lg lg:text-sm font-extralight  text-gray-200'>
       Develop customized online stores that reflect your brand and vision.</p>

                    <div className="about flex gap-3 items-center ">
                      <i className='bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line'></i>
                      <p className='uppercase text-sm' >About Ecomerse</p>
                    </div>
              </div>
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                
               <h4 className='font-extralight text-xl lg:text-lg uppercase '>
                  campaign</h4>
            <p className='text-lg lg:text-sm font-extralight  text-gray-200'>
                Utilize data and analytics to optimize your marketing performance.
.</p>

                    <div className="about flex gap-3 items-center ">
                      <i className='bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line'></i>
                      <p className='uppercase text-sm' >About campaign</p>
                    </div>
              </div>
              <div className="card flex flex-col gap-2 border-t-1  py-4">
                
               <h4 className='font-extralight text-xl lg:text-lg uppercase '>
                  social media</h4>
            <p className='text-lg lg:text-sm font-extralight  text-gray-200'>
Create engaging and shareable content that drives brand awareness.

.</p>

                    <div className="about flex gap-3 items-center ">
                      <i className='bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line'></i>
                      <p className='uppercase text-sm' >About social media</p>
                    </div>
              </div>
            </div>
              </div>

              <div className="bottom ">
                <div className="imgdiv lg:p-5  ">
            <img className='object-fill w-full h-auto' src="
https://assets-global.website-files.com/63fd93c920392238faa118c4/63ff013040f8ceac6b7f98d1_home-services-p-1600.webp            " alt="" />
          </div>
              </div>
        </section>

        <section className=' sec5 flex flex-col gap-5'>
           <div className=" py-3">
            <img className='object-fill w-full h-auto' src="
https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fedc0657c2b7a94573a859_heading-selected-work.svg  
    " alt="" />
          </div>

          <div className="sec4-container lg:p-4 flex flex-col lg:grid lg:grid-cols-3 gap-5">
             <div className="">
            <img className='object-fill w-full h-auto' src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401a5abcc00dd606d1af379_work-01-thumb-01.webp   " alt="" />
          </div>
            <div className="hidden lg:block">
            <img className='object-fill w-full h-auto' src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401a5adcb82400906ca21b1_work-01-thumb-02-p-500.webp  " alt="" />
          </div>

<div className="card flex flex-col gap-2  flex flex-col justify-between h-full py-4">
                
        <div>       <h4 className='font-extralight text-xl  lg:text-lg uppercase '>
                  Sage</h4>
            <p className='text-lg lg:text-sm font-extralight  text-gray-200'>
                    Social Media Campaign: Building brand awareness and engagement..</p></div>

                    <div className="about flex gap-3 items-center ">
                      <i className='bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line'></i>
                      <p className='uppercase text-sm' >About Branding</p>
                    </div>
              </div>

 <div className=" lg:order-3">
            <img className='object-fill w-full h-auto' src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401aab738e8cf1ec2616298_work-02-thumb-01.webp  " alt="" />
          </div>
          <div className="hidden lg:block lg:order-2">
            <img className='object-fill w-full h-auto' src="
https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401aab9b421f8fa45424d65_work-02-thumb-02-p-500.webp " alt="" />
          </div>

<div className="card flex flex-col justify-between h-full gap-2 lg:order-1   py-4">
                
               <div><h4 className='font-extralight text-xl lg:text-lg uppercase '>
                  Azure</h4>
            <p className='text-lg lg:text-sm font-extralight  text-gray-200'>
Website Redesign: Improving user experience and modernizing design.

                    </p></div>

                    <div className="about flex gap-3 items-center ">
                      <i className='bg-black text-white text-xl border-2 border-white px-2 py-1 rounded-full ri-arrow-right-up-line'></i>
                      <p className='uppercase text-sm' >About Branding</p>
                    </div>
              </div>
          </div>
        </section>
        </main>
    </div>
  )
}

export default Home