import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
       
      <section
        style={{
          backgroundImage:
            'url("https://sheriyans-task.vercel.app/img/WhatsApp%20Image%202025-07-09%20at%2019.42.34.jpeg")',
        }}
        className="relative w-full landing-page flex justify-start  flex-col  h-screen bg-cover bg-center bg-no-repeat"
      >
      <Navbar />
      <div className=" text-amber-100 text-2xl md:text-3xl absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2">
      <h1 className="whitespace-nowrap uppercase">Calistro Park</h1>
</div>
      </section>

      <section className="sec2 max-w-[80%] md:py-9 flex flex-col gap-5 items-center   justify-center  py-3 text-black">
           <div className="info-container max-w-[600px]  flex flex-col gap-5">
            <h1 className="text-2xl text-center capitalize font-medium">who we are</h1>
           <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum repellendus eius laborum delectus, eum, molestiae non repellat nisi minus porro mollitia, ex modi sunt magnam! Impedit cupiditate nam saepe quidem.</p>
           <a className="text-md underline capitalize" href="#">read our story</a>
           </div>
      </section>

      <section className="sec3 max-w-[80%] md:py-9 border-t-4 border-b-4 border-gray-500 flex flex-col py-8  gap-5 items-center justify-center text-black">
           <h1 className="text-2xl whitespace-nowrap capitalize">featured products</h1>
           <div className="card-container grid grid-cols-1 md:grid-cols-3 ">
             <div className="card px-3 py-2 flex flex-col items-center gap-3">
              <img src="https://images.unsplash.com/photo-1634449277780-81ab99e85416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="name">Air & linen fresh</div>
              <div className="price">7.7$</div>
             </div>
               <div className="card px-3 py-2 flex flex-col items-center gap-3">
              <img src="https://images.unsplash.com/photo-1608571702600-5a5419d31475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="name">Air & linen fresh</div>
              <div className="price">7.7$</div>
             </div>
               <div className="card px-3 py-2 flex flex-col items-center gap-3">
              <img src="https://images.unsplash.com/photo-1634449277780-81ab99e85416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="name">Air & linen fresh</div>
              <div className="price">7.7$</div>
             </div>
           </div>
           <button className="border-2 border-gray-400 bg-transparent px-2 py-1 ">shop all</button>
      </section>

      <section className="sec4 max-w-[80%] md:py-9  flex flex-col py-5  gap-5 items-center justify-center text-black">

        <h4>sing up for our newsletter</h4>
        <div className="form flex gap-2">
          <input className="border-3 border-gray-500" type="text" name="" id="" />
          <button className="px-2 py-3 bg-gray-500 ">Submit</button>
        </div>
      </section>

      <footer className="bg-emerald-950 md:py-9 md:px-8 py-7 w-full place-items-start px-4 grid grid-cols-2 md:grid-cols-3 gap-5 ">
        <div className="footer-top">
          <div className="navlinks">
             <ul className="flex flex-col gap-2">
              <li><a href="#">whatsapp</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">facebook</a></li>
              <li><a href="#">inastagram</a></li>

             </ul>
          </div>
        </div>
        <div className="footerbootom w-full  ">
             <div className="navlinks grid grid-cols-1 w-full md:grid-cols-2  gap-5 place-items-center">
              <ul className="flex flex-col gap-2">
              <li><a href="#">whatsapp</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">facebook</a></li>
              <li><a href="#">inastagram</a></li>

             </ul>
               <ul className="flex flex-col gap-2">
              <li><a href="#">whatsapp</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">facebook</a></li>
              <li><a href="#">inastagram</a></li>

             </ul>
          </div>

          </div>
          <p>&copy; 2023 Calistro Park.</p>
         

      </footer>
    </div>
  );
};

export default Home;
