import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full  bg-[#141a1daf] text-gray-300  px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Quick Links</h6>
          <ul>
            <li className="py-1">Blog</li>
            <li className="py-1">Contact US</li>
            <li className="py-1">Profile</li>
            <li className="py-1">About</li>
            <li className="py-1">Q&A</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Join Our Work</li>
            <li className="py-1">Share the word</li>
            <li className="py-1">Share your experiences</li>
            <li className="py-1">Email: together@gmail.com</li>
            
          </ul>
        </div>

        <div className="col-span-2 px-2">
          <h6 className="font-bold uppercase pt-2">Come Back Soon</h6>
          <p>
            Thank you for visiting TOGETHER. . We hope you found the content
            inspiring and uplifting. Our community is built on the idea of
            sharing our experiences to grow in faith and love for Jesus Christ.
          </p>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4"> TOGETHER. , LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <SiGmail/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
