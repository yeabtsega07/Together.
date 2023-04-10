import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { GiIdea } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi"
import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen  ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative" >
        <div className="px-4 py-12">
          <h2 className=" text-3xl pt-8 text-slate-300 uppercase text-center" >Support</h2>
          <h3 className="text-5xl font-bold py-6 text-center" >Finding the right crowd</h3>
          <p className="py-4 text-3xl text-slate-300">
            At TOGETHER. , we're committed to providing a safe and supportive
            space for our community. If you have any questions, concerns, or
            feedback, please don't hesitate to reach out to us. We're here to
            support you in your faith journey, and we value your input and
            ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 mx-2 md:grid-cols-2 relative gap-x-12 gap-y-24 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <FaHandsHelping className=" w-12 h-12 p-2 bg-[#47cedb] text-white rounded-lg  mt-[-4rem]" />
              <h3  className="font-bold text-2xl my-6">Get Involved</h3>
              <p className="text-gray-600 text-xl">
                We believe that everyone has a story to share and a unique
                perspective to offer. We're always looking for new voices to
                join our community and share their experiences with us. Please
                feel free to contact us.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-[#47cedb]">Contact Us <HiArrowRight/></p>
            </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <GiIdea className=" w-12 h-12 p-2 bg-[#47cedb] text-white rounded-lg  mt-[-4rem]"/>
              <h3 className="font-bold text-2xl my-6">New Ideas</h3>
              <p className="text-gray-600 text-xl">
                Are you a creative thinker with a passion for making a
                difference in the world? Do you have new ideas for how we can
                grow and improve our community here at TOGETHER. ? We'd love to
                hear from you!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-[#47cedb]">Contact Us <HiArrowRight/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
