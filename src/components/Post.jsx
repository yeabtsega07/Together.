import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Footer from './Footer';


const Post = () => {
  return (
    <>
    <div className='bg-[#ffffff95] mx-28 mb-5 pt-5 pb-10 rounded-2xl shadow-xl '>
         <img
      className = " ml-32 w-10/12 h-64 rounded-2xl object-cover"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
      />

    <div className=" relative">
        <div className="ml-32 flex items-center justify-between">
        <p
          className = "ml-12 my-4 p-5  text-lg bg-[#063434ea] rounded-full text-[white] shadow-2xl ">Tagggggg </p>
          
          </div>
        <div  className =" ml-32 flex items-center" >
          
        <p
          className = "ml-12 my-4 p-5 w-2/12 text-xl font-semibold font-serif">Title </p>
        </div>
        <div className = "ml-32 flex items-center" >
          <p className = "ml-12 my-4 p-5 w-10/12 text-lg h-full font-medium"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a veniam voluptates, est odit, saepe autem itaque quas cupiditate dignissimos dolor nisi non quis laborum fugit veritatis quam quia quos!</p>
        </div>

      </div>
    
      
    </div>
    <div>
        <div className="flex justify-end mx-28 mb-10 mt-5">
            <button className="mr-2 text-[white] border-none shadow-2xl text-3xl ">
                <AiFillHeart />
            </button>

            <span className="pr-2 mr-5 text-[white] text-2xl">10</span>
            <button className=" text-[white] border-none shadow-2xl text-3xl">
                <FaShareAlt />
            </button>

            </div>
    </div>
    <Footer/>
          </>
  )
}

export default Post
