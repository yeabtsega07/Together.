import React from "react";
import { FaSlideshare, FaBloggerB} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="bg-[#ffffff] w-full py-32">
      <div className="max-w-[1240px] mx-auto">
        <div className=" text-center">
          <h2 className=" text-4xl font-bold mb-4">
          We are TOGETHER.
          </h2>
          <p className=" text-3xl py-6 text-gray-600">
           A free platform where you can connect with others
            ,share your experiences and tap in to a space where our mistakes can help others.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center group">
          <div className="border  rounded-xl shadow-xl m-3 py-16 group-hover:scale-[0.9] hover:!scale-[1.2]  duration-300 cursor-pointer ">
            <p className="text-6xl font-bold text-[#34747593] flex justify-center">
              <FaSlideshare />
            </p>
            <p className="text-gray-600 font-medium mt-2">Sharing</p>
          </div>

          <div className="border  rounded-xl shadow-xl m-3 py-16 group-hover:scale-[0.9] hover:!scale-[1.2] duration-300 cursor-pointer">
            <p className="text-6xl font-bold text-[#34747593]   flex justify-center">
              <FaBloggerB />
            </p>
            <p className="text-gray-600 font-medium mt-2">Inspiring Stories</p>
          </div>

          <div className="border  rounded-xl shadow-xl m-3 py-16 group-hover:scale-[0.9] hover:!scale-[1.2] duration-300 cursor-pointer">
            <p className="text-6xl font-bold text-[#34747593]   flex justify-center">
              <BsPersonLinesFill />
            </p>
            <p className="text-gray-600 font-medium mt-2">Testimonies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
