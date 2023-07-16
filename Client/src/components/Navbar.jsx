import React, { useState } from "react";
import { Link} from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useScrollPosition } from "../hooks/useScrollPosition";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <div className={classNames( scrollPosition > 0 ? " shadow  bg-[#1d464e] w-screen md:px-40 sm:px-2" : "max-w-[1240px] mx-auto","  ease-in-out duration-300 flex justify-between items-center h-24  text-white sticky top-0 z-50 mb-4 " )}>
      <Link to="/" ><h1 className="w-full text-3xl font-bold text-[#fff] pl-3 ">TOGETHER.</h1></Link>
      <ul className="hidden md:flex pr-3">
        <Link to="/" className="p-5  border-b-2 border-transparent hover:border-slate-200 duration-100   font-semibold cursor-pointer md:text-xl">Home</Link>
        <Link to="/blog" className="p-5  border-b-2 border-transparent hover:border-slate-200 duration-100   font-semibold cursor-pointer md:text-xl">Blog</Link>
        <Link to="/profile" className="p-5 border-b-2 border-transparent hover:border-slate-200 duration-100   font-semibold cursor-pointer md:text-xl">Profile</Link>
        <Link to="/mypost" className="p-5 border-b-2 border-transparent hover:border-slate-200 duration-100   font-semibold cursor-pointer md:text-xl">My Posts</Link>
        <Link to="/signin"> 
        <button className={classNames( scrollPosition > 0 ? "text-white": "text-[#255f6bec]"," bg-transparent md:text-xl  mr-4 p-5  duration-100   border-b-2 border-transparent hover:border-slate-200 font-semibold")} >
          SignIn
        </button>
        </Link>
        <Link to="/signup">
        <button className="px-8 py-3 mt-2 mb-3 bg-[#255f6bec] p-5 rounded-lg font-semibold hover:bg-[#ffffff] hover:text-slate-900  duration-75 md:text-xl">
          SignUp
        </button>
        </Link>
      </ul>

      <div className="md:hidden mr-4" onClick={handleClick}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] h-full  bg-[#1d464e] ease-in-out duration-500 block md:hidden"
            : "fixed left-[-100%] block md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#fff] pl-3 mt-7 ">TOGETHER.</h1>
        <ul className=" uppercase pt-24">
        <Link to="/" className="p-5 cursor-pointer hover:font-bold block " onClick={handleClose}>Home</Link>
          <Link to="/blog" className="p-5 cursor-pointer hover:font-bold block" onClick={handleClose}>
            Blog
          </Link>
          <Link to="/profile" className="p-5 cursor-pointer hover:font-bold block " onClick={handleClose}>
            Profile
          </Link>
          <Link to="/mypost" className="p-5 cursor-pointer hover:font-bold block " onClick={handleClose}>
            My Posts
          </Link>

          <Link to="/signin" className="p-5 block " onClick={handleClose}>
            <button className="  bg-[#a4bfc7] p-2 w-20 rounded-md text-[#152629ec] uppercase cursor-pointer hover:!scale-[1.1] ">
              SignIn
            </button>
          </Link>
          <Link to="/signup" className="p-5 block  " onClick={handleClose}>
            <button className="uppercase cursor-pointer hover:!scale-[1.1]  ">
              SignUp
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;