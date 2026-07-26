import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Sec2 from "../components/Sec2";
import Sec3 from "../components/Sec3";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-4">
        <Hero />
        <Sec2 />

        <Sec3 />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
