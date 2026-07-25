import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-5">
        <Hero />
        <About />
        <Services />
        <Work />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
