import React from 'react';
import { useContext, useState } from "react";
import Footer from '../components/Footer';
import axios from "axios";
import { Context } from '../context/Context';


export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      tag,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <>
    <div className="write">
      <img
      className = " ml-32 w-10/12 h-64 rounded-lg object-cover"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
      />
      <form className=" relative " onSubmit={handleSubmit}>
        <div className="ml-32 flex items-center justify-between">
        <input
          className = "ml-12 my-4 p-5 w-2/12 text-lg rounded-lg"
          placeholder="Add a Tag"
          type="text"
          autoFocus={true}
          onChange={e=>setTag(e.target.value)}
          />

        <button className=" md:mr-56 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full flex justify-center align-middle shadow-2xl" type='submit'>
          Publish
        </button>
          </div>
        <div  className =" ml-32 flex items-center" >
          
          <input
          className = "ml-12 my-4 p-5 w-10/12 text-lg rounded-lg"
          placeholder="Add a Title"
          type="text"
          autoFocus={true}
          onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className = "ml-32 flex items-center" >
          <textarea
          className = "ml-12 my-4 p-5 w-10/12 text-lg h-screen rounded-lg"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
          onChange={e=>setDesc(e.target.value)}
          />
        </div>

      </form>
    </div>
    <Footer/>
        </>
  );
}
