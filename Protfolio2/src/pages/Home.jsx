import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='w-full   '>
        <Navbar />

        <main className='  flex justify-center items-center flex-col   gap-4 md:flex-row lg:flex-row p-4'>
            <section className='infocontiner p-4 text-center md:flex-1 lg:flex-1 flex gap-4 flex-col justify-center items-center '>
               <div className="heading">
                 <h1 className='text-5xl lg:text-6xl font-mono capitalize'>Hii i am <span className='text-white'>rizwan</span></h1>
                <h4 className='text-xl'>Mern stack developer and gen ai ethuaist</h4>
               </div>
                <p className='text-[15px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique ut, quaerat voluptate rerum at atque quasi doloribus? Blanditiis natus non dolores ea earum explicabo distinctio! Totam doloribus fugiat eius.</p>

                <div className="btns flex gap-4 w-full items-center justify-center flex-col lg:flex-row">
                    <button className='px-5 py-3 rounded-2xl bg-black text-white w-full'>Contact</button>
                    <button className='px-5 py-3 rounded-2xl bg-red-700 text-white w-full'>Download CV</button>


                </div>
            </section>

            <section className='  md:flex-1 lg:flex-1 lg:p-4 w-full bg-red-600  rounded-2xl items-center justify-center '>
                <img className='object-cover rounded-2xl ' src="https://i.pinimg.com/736x/48/ce/e5/48cee53203651dae8f3229fd4739c3f8.jpg" alt="" />
            </section>
        </main>
    </div>
  )
}

export default Home