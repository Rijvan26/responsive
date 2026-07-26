import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 md:py-9 md:px-8 py-7 w-full place-items-start px-4 grid grid-cols-2 md:grid-cols-3 gap-5 ">
      <div className="footer-top">
        <div className="navlinks">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">whatsapp</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">inastagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerbootom w-full  ">
        <div className="navlinks grid grid-cols-1 w-full md:grid-cols-2  gap-5 place-items-center">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">whatsapp</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">inastagram</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">whatsapp</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">inastagram</a>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2023 Calistro Park.</p>
    </footer>
  );
};

export default Footer;
