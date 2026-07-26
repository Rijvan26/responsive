import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Products from "../components/Products";
import About from "../components/About";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Hero />

      <About />

      <Products />

      <Form />

      <Footer />
    </div>
  );
};

export default Home;
