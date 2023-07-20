import React, { useEffect, useState } from "react";
import PostCard from "./postCard";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingCircle from "./LoadingCircle";

const FeaturePostSection = () => {
  const [showMore, setShowMore] = useState(false);
  const maxPosts = 4;
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [posts, setPosts] = useState([]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts/");
        setPosts(res.data);
        setIsLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchPosts();
  }, []);

  let featuredPost = posts[0];
  let restPosts = showMore ? posts.slice(1) : posts.slice(1, maxPosts);
  console.log(restPosts);

  return (
    <div className="featured-posts  w-screen">
      {isLoading ? (
        // Show loading circle if isLoading is true
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div> <LoadingCircle/>
        </div>
      ) : (
        /* Render the rest of the component once loading is complete */
        <>
          <h2 className="text-center text-3xl font-bold text-slate-200 mb-3">
            Featured Posts
          </h2>
          <div className=" px-40 py-4">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold  text-slate-900 py-2 mb-2  ">
                {featuredPost.title}
              </h3>
              <p className=" text-xl font-thin before:content-['• '] ">
                {featuredPost.tag}
              </p>
            </div>
            <div className=" flex justify-start align-middle  ">
              <div className=" inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {featuredPost.username.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="text-lg font-bold pt-2 px-4">
                By {featuredPost.username}
              </p>
            </div>
          </div>

          <div className="bg-[#fff] h-full px-40 py-4">
            <div className=" block bg-white   ">
              <p className="text-lg">
                {featuredPost.desc.slice(0, 1000)}...
                <Link to={`/post/${featuredPost._id}`}>
                  {" "}
                  <button className=" bg-[#327578ec] p-3 rounded-lg hover:text-white  duration-75 md:text-xl mx-2">
                    Show More
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <div className=" flex-col bg-white h-full justify-center px-40 py-20 ">
            {restPosts.map((post) => (
              <Link to={`/post/${post._id}`}><PostCard
                title={post.title}
                author={post.username}
                tag={post.tag}
                likes="10"
                content={post.desc}
              /></Link>
            ))}
          </div>
          {!showMore && posts.length > maxPosts && (
            <div className=" bg-white py-4">
              <button
                className="block mx-auto bg-[#327578ec] p-3 rounded-lg hover:text-white  duration-75 md:text-xl   "
                onClick={toggleShowMore}
              >
                Show More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FeaturePostSection;
