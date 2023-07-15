import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { MdEdit, MdDelete } from "react-icons/md";




const Mypost = () => {
  const TABLE_HEAD = ["All MY POSTS", ""];
 
const TABLE_ROWS = [
  {
    title: "Post 1",
  },
  {
    title: "Post 2",
  },
  {
    title: "Post 3",
  },
  {
    title: "Post 4",
  },

];

  return (
    <>
    <div className=" w-full h-full pb-20">
    <div className=" py-10 h-auto">
      <h1 className="text-white text-3xl font-semibold text-center">My Posts</h1>
    </div>
    <div className=" py-10 px-40 h-auto">
      <Link to="/write"> <button className="bg-cyan-500 hover:bg-cyan  -700 text-white font-bold py-2 px-4 rounded-full flex justify-center align-middle">
        <span>Create New Post</span> <span className="px-1 pt-1"><TfiWrite/> </span>
      </button> </Link>
    </div>
    <Card className=" mx-40">
      <table className="w-full min-w-max table-auto text-left px-20">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-90 "
                  >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ title }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-2" : "p-2 border-b border-blue-gray-50";
            const buttons = isLast ? "p-2 text-right flex justify-end gap-2 pr-2" : "p-2 border-b border-blue-gray-50 text-right flex justify-end gap-2  pr-2";
            
            return (
              <tr key={title}>
                <td className={classes}>
                  <Link>
                  <Typography variant="small" color="blue-gray" className="font-medium opacity-95 pl-2 text-xl">
                    {title}
                  </Typography>
                  </Link>
                </td>
                <td className={buttons}>
                <Typography as="a" href="#" variant="small" color="blue" className="font-bold text-xl">
                    <span className="px-1 " ><MdEdit/></span>
                  </Typography>
                  <Typography as="a" href="#" variant="small" color="blue" className="font-bold text-xl">
                    <span className="px-1  " ><MdDelete/></span>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
          </div>
          <Footer/>
          </>
  );
};

export default Mypost;