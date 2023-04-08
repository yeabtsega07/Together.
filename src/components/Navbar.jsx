import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white ">
      <h1 className="w-full text-3xl font-bold text-[#fff] pl-3 ">TOGETHER.</h1>
      <ul className="hidden md:flex pr-3">
        <li className="p-5">Blog</li>
        <li className="p-5">Profile</li>
        <button className="border-none bg-transparent text-[#255f6bec] mr-4 p-5 font-medium">
          SignIn
        </button>
        <button className="px-8 py-3 mt-2 mb-3 bg-[#255f6bec] p-5 rounded-lg font-medium ">
          SignUp
        </button>
      </ul>

      <div className="md:hidden mr-4" onClick={handleClick}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] h-full bg-[#145062] ease-in-out duration-500 block md:hidden"
            : "fixed left-[-100%] block md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#fff] pl-3 mt-4 ">TOGETHER.</h1>
        <ul className=" uppercase pt-24">
          <li className="p-5 " onClick={handleClose}>
            Blog
          </li>
          <li className="p-5 " onClick={handleClose}>
            Profile
          </li>

          <li className="p-5  ">
            <button className="  bg-[#a4bfc7] p-2 w-20 rounded-md text-[#152629ec] uppercase">
              SignIn
            </button>
          </li>
          <li className="p-5   ">
            <button className="uppercase">
              SignUp
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
