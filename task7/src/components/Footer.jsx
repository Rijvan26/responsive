import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 ">
    <div className="footer-top border-b-1 py-7  flex flex-col items-center justify-center text-center gap-8">
          <div className="imgdiv py-3">
        <img
          className="object-fill w-full h-auto"
          src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63feeb42b65dd173f3735367_heading-lets-create-inverse.svg"
          alt="sick"
        ></img>
      </div>
      <h1 className="font-extralight text-3xl uppercase lg:text-[5rem] ">
        Unleashing the Potential of Your Brand
      </h1>
      <button className="text-xl bg-gray-600 border-2 border-white px-4 py-2 rounded-3xl">Get In Touch <i className=' text-white px-2 ri-arrow-right-up-line'></i>


      </button>
    </div>

    <div className="footer-navlinks py-5 lg:py-9 flex flex-col gap-5 lg:grid lg:grid-cols-4 place-items-start lg:px-5">
        <div className="social-links flex flex-col gap-5">
            <div className="logo max-w-5 ">
                <h1 className="uppercase text-xl">Erik</h1>
        </div>

        <div className="link-card text-xl flex gap-5 items-center">
            <i className="bg-gray-600 text-white border-2 px-2 py-1 rounded-full ri-instagram-line"></i>
            <p className="uppercase text-lg ">instagram</p>
        </div>
        
        <div className="link-card text-xl flex gap-5 items-center">
            <i className="bg-gray-600 text-white border-2 px-2 py-1 rounded-full ri-twitter-line"></i>
            <p className="uppercase text-lg">twitter</p>
        </div>
        
        <div className="link-card text-xl flex gap-5 items-center">
            <i className="bg-gray-600 text-white border-2 px-2 py-1 rounded-full ri-behance-line"></i>
            <p className="uppercase text-lg ">behance</p>
        </div>
        </div>

        <div className="pages flex flex-col gap-5 items-start">
            <h4 className="uppercase text-lg">pages</h4>
            <ul className="flex flex-col gap-4 text-sm uppercase text-gray-300">
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Jobs</li>
                <li><a href="#"></a>Service</li>
                <li><a href="#"></a>Contactt</li>
            </ul>
            <button className="text-lg bg-gray-600 border-2 border-white px-2 py-1 rounded-3xl">Get In Touch <i className=' text-white px-2 ri-arrow-right-up-line'></i>
      </button>
        </div>
        <div className="pages flex flex-col gap-5 items-start">
  <h4 className="uppercase text-lg">CMS</h4>

  <ul className="flex flex-col gap-4 text-sm uppercase text-gray-300">
    <li><a href="#">Work</a></li>
    <li><a href="#">Work Single</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">News Single</a></li>
    <li><a href="#">Shop</a></li>
    <li><a href="#">Shop Single</a></li>
  </ul>
</div>

<div className="pages flex flex-col gap-5 items-start">
  <h4 className="uppercase text-lg">Utility Pages</h4>

  <ul className="flex flex-col gap-4 text-sm uppercase text-gray-300">
    <li><a href="#">404 Error Page</a></li>
    <li><a href="#">Password Protected</a></li>
    <li><a href="#">Styleguide</a></li>
    <li><a href="#">Licensing</a></li>
    <li><a href="#">Changelog</a></li>
  </ul>
</div>
    </div>

    <div className="policy">
        <p>© 2026 Rizwan. Made with ❤️. </p>
    </div>
    </footer>
  );
};

export default Footer;
