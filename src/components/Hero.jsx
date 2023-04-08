import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-ful h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-white font-bold p-2">
          Connecting through Christ: Sharing Life's Experiences
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          GROW TOGETHER.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">
            Learn, Grow, Share{" "}
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold"
            strings={["United", "Keep pushing", "Success"]}
            typeSpeed={100}
            backSpeed={110}
            loop
          />

        </div>
        {/* <p  className="md:text-2xl text-xl font-bold text-gray-500">
        In Christ, We Connect: Sharing Life's Experiences, Learning from One Another, Growing in Faith, and Encouraging Each Other on Our Journeys
        </p> */}

        <button className="bg-[#255f6bec] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
