import React from 'react';
import Footer from './Footer';


export default function Write() {
  return (
    <>
    <div className="write">
      <img
      className = " ml-32 w-10/12 h-64 rounded-lg object-cover"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
      />
      <form className=" relative">
        <div className="ml-32 flex items-center justify-between">
        <input
          className = "ml-12 my-4 p-5 w-2/12 text-lg"
          placeholder="Add a Tag"
          type="text"
          autoFocus={true}
          />

        <button className=" md:mr-56 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full flex justify-center align-middle shadow-2xl">
          Publish
        </button>
          </div>
        <div  className =" ml-32 flex items-center" >
          
          <input
          className = "ml-12 my-4 p-5 w-10/12 text-lg"
          placeholder="Add a Title"
          type="text"
          autoFocus={true}
          />
        </div>
        <div className = "ml-32 flex items-center" >
          <textarea
          className = "ml-12 my-4 p-5 w-10/12 text-lg h-screen"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
          />
        </div>

      </form>
    </div>
    <Footer/>
        </>
  );
}
