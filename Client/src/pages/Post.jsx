import React, { useContext, useState, useEffect } from 'react';
import { FaShareAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import { Context } from '../context/Context';
import { MdEdit, MdDelete } from "react-icons/md";
import LoadingCircle from "../components/LoadingCircle";
import axios from 'axios';


const Post = (  ) => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const {user} = useContext(Context);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [ desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  console.log("skjdbfv");
  console.log(path);
  console.log(location.pathname)
  console.log("skjdbfv");

  useEffect(() => {
    const getPost = async (post) => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setTag(res.data.tag);
      setDesc(res.data.desc);
      setIsLoading(false); 
    };

    getPost();
  }, [path]);

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`, {
  //       data: { username: user.username },
  //     });
  //     window.location.replace("/");
  //   } catch (err) {}
  // };
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username }, // Pass the username in the request body
      });
      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };
  

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        tag,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <>
    <div>
    {isLoading ? (
        // Show loading circle if isLoading is true
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div> <LoadingCircle/>
        </div>
      ) : 
      <>
      
    <div className='bg-[#ffffff95] mx-28 mb-5 pt-5 pb-10 rounded-2xl shadow-xl '>
         <img
      className = "  m-auto w-10/12 h-64 rounded-2xl object-cover"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
      />

    <div className=" m-auto relative">
        <div className=" mx-28 flex items-center justify-between ">
          { updateMode ? <input
          className = " my-4 p-5 w-2/12 text-lg rounded-lg"
          placeholder="Add a Tag"
          type="text"
          autoFocus={true}
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          /> :
          <div className='flex w-full m-auto justify-between'>

          <p
          className = " my-4 p-5  text-lg bg-[#063434ea] rounded-full text-[white] shadow-2xl "> {tag} </p>
                    {post.username === user?.username && (
                    <div className=" flex align-middle items-center justify-end  gap-4">
              <MdEdit onClick={() => setUpdateMode(true)} className=' text-white cursor-pointer text-2xl '/>
              <MdDelete className=' text-white cursor-pointer text-2xl' onClick={handleDelete}/>
            </div>
            )}
        
          </div>
          
          }
          </div>
        <div  className =" mx-28 flex items-center m-auto" >
          { updateMode ? <input
          className = " my-4 p-5 w-10/12 text-lg rounded-lg"
          placeholder="Add a Title"
          type="text"
          autoFocus={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}

          /> : 

          <p className = " my-4 p-5 w-full text-xl font-semibold font-serif">{title} </p>
          }
        </div>
        <div className = "mx-28 flex items-center" >
          {
            updateMode ?  <textarea
            className = "my-4 p-5 w-10/12 text-lg h-screen rounded-lg"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            value={desc}
            /> : 
          <p className = " my-4 p-5  text-lg h-full  w-full font-medium"> {desc}</p>
          }
        </div>

        {updateMode && (
          <div className=' w-full text-center'>

          <button className=" bg-[#255f6bec] text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:text-xl hover:bg-white hover:text-[#1a3c43ec]" onClick={handleUpdate}>
            Update
          </button>
          </div>
        )}
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
    </> }
    </div>
    <Footer/>
          </>
  )
}

export default Post
