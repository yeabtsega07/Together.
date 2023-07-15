import React from "react";
import { BiShare } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";

const PostCard = ({ title, author, tag, likes, key, content }) => {

  let preview = content;
  
if (content && content.split(" ").length > 20) {
  preview = content.split(" ").slice(0, 20).join(" ") + "...";
}

  return (
    <div className="border-none shadow-xl hover:!scale-[1.01] duration-200 s p-4 py-12 mb-7 bg-[#dee8e9e8] rounded-md">
      <Link to={`/post`} className="m-1">
        <div className="flex justify-between">
          <div className="mr-1">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full w-12 h-12"
            />
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
      </Link>
      <div className="flex justify-end">
        <div className="flex ">
          <button className="mr-1 border-none shadow-sm">
            <BsHeart />
          </button>
          <IconButton>
      <i className="fas fa-heart" />
    </IconButton>
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