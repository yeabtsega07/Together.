import React from 'react'
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Support from "../components/Support";
import QandA from "../components/QandA";
import Quotes from "../components/Quotes";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Support/>
      <QandA/>
      <Contact/>
      <Quotes/>
      <Footer/>
    </div>
  )
}

export default Homepage
