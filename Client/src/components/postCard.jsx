import React from "react";
import { BiShare } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";



const PostCard = ({ title, author, tag, likes,  content }) => {

  let preview = content;
  
if (content && content.split(" ").length > 20) {
  preview = content.split(" ").slice(0, 20).join(" ") + "...";
}

  return (
    <div className="border-none shadow-xl hover:!scale-[1.01] duration-200 s p-4 py-12 mb-7 bg-[#dee8e9e8] rounded-md">
      <div  className="m-1">
        <div className="flex justify-between">
          <div className="mr-1">
          <div class=" inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span class="font-medium text-gray-600 dark:text-gray-300">{author.slice(0,2).toUpperCase()}</span>
</div>
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-lg font-bold">By {author}</p>
            
          </div>
          <div>
            <p className="before:content-['. '] text-lg">{tag}</p>
          </div>
        </div>
        <div className="flex justify-center align-middle py-2">
          <p className="text-lg">{preview}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex ">
          <button className="mr-1 border-none shadow-sm">
            <BsHeart />
          </button>
          <span className="pr-2">{likes}</span>
          <button className="border-none shadow-sm">
            <BiShare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;