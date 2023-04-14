import React from "react";
import contactImg from "../assets/contact.jpg";
import { AiFillContacts } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-white pb-2">
      <div className="w-full h-[640px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={contactImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h3 className="md:text-5xl text-xl  font-bold py-6 text-center">
            Get in Touch
          </h3>
          <p className="py-4 md:text-3xl text-lg text-slate-300">
            If you have any questions, concerns, or feedback, please don't
            hesitate to reach out to us. We're here to support you in any way we
            can. You can reach us via the contact form or email address listed
            on the footer.
          </p>
        </div>

        <div class="container mx-auto my-20 w-1/3  bg-white rounded-xl shadow-2xl">
          <div class="p-8 space-y-5 shadow-xl">
            <form>
              <AiFillContacts className=" w-12 h-12 p-2 bg-[#47cedb] text-white rounded-lg  mt-[-4rem]" />
              <h1 className=" text-black text-center py-3 md:text-2xl text-xl font-bold">
                Contact Us
              </h1>
              <div class="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  class="border border-gray-700 px-4 py-2 focus:outline-none focus:border-[#47cedb] focus:border-2 text-black"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  class="border border-gray-700 px-4 py-2 focus:outline-none focus:border-[#47cedb] focus:border-2 text-black"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  class="border border-gray-700 px-4 py-2 focus:outline-none focus:border-[#47cedb] col-span-2 focus:border-2 text-black"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  class="border border-gray-700 px-4 py-2 focus:outline-none focus:border-[#47cedb] col-span-2 focus:border-2 text-black"
                  placeholder="Phone"
                />
                <textarea
                  cols="10"
                  rows="5"
                  class="border border-gray-700 px-4 py-2 focus:outline-none focus:border-[#47cedb] col-span-2 focus:border-2 text-black"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                class="focus:outline-none mt-5 bg-[#47cedb] px-4 py-2 text-white font-bold w-full cursor-pointer hover:text-[#255f6bec] hover:bg-[#dbe5e8]"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
