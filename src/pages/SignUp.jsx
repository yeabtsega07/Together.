import React from "react";
import { AiFillFacebook, AiFillGithub, AiOutlineGoogle } from "react-icons/ai";

const SignUp = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="bg-[#2a464fc8] text-white rounded-2xl shadow-2xl  flex flex-col w-full pt-12  md:w-1/2 h-5/6 items-center max-w-4xl transition duration-1000 ease-in">
        <h2 className="p-3 text-3xl font-bold text-white">TOGETHER.</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className="text-xl font-semibold text-white pt-2">
          Create Account!
        </h3>
        <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="socialIcon border-white">
            <AiFillFacebook className="text-white" />
          </div>
          <div className="socialIcon border-white">
            <AiFillGithub className="text-white" />
          </div>
          <div className="socialIcon border-white">
            <AiOutlineGoogle className="text-white" />
          </div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col items-center justify-center mt-2">
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-white focus:outline-none focus:ring-0"
            placeholder="Name"
          ></input>
          <input
            type="email"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-white focus:outline-none focus:ring-0"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-white focus:outline-none focus:ring-0"
            placeholder="Password"
          ></input>
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-white focus:outline-none focus:ring-0"
            placeholder="Confirm Password"
          ></input>
          <input
            type="text"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-white focus:outline-none focus:ring-0"
            placeholder="Writer Code"
          ></input>
          <button className="rounded-2xl m-4 text-[#16353cec] bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-[#255f6bec] transition duration-200 ease-in">
            Sign Up
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className="text-white mt-4 text-sm">Already have an account?</p>
        <p className="text-white mb-4 text-sm font-medium cursor-pointer">
          Sign In to your Account?
        </p>
      </div>
    </div>
  );
};

export default SignUp;
