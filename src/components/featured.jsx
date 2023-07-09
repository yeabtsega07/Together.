import React, { useState } from "react";
import PostCard from "./postCard";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const FeaturePostSection = () => {
  const [showMore, setShowMore] = useState(false);
  const maxPosts = 3;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      author: "John Doe",
      authorId: 1,
      likes: 10,
      comments: 5,
      tag: "Gospel",
      content: "The gospel is the good news of Jesus Christ. It is the message of salvation that God has provided for all people through the life, death, and resurrection of Jesus. The gospel tells us that we are all sinners and separated from God, but that God loves us and has provided a way for us to be reconciled to Him through faith in Jesus. Jesus lived a perfect life, died on the cross for our sins, and rose from the dead on the third day. Through faith in Jesus, we can be forgiven of our sins and have eternal life with God. The gospel is not just a message of salvation, but also a message of hope, joy, and peace. It is the power of God for the salvation of everyone who believes. As Christians, we are called to share the gospel with others and to live out its message in our daily lives. We are called to love God and love our neighbors as ourselves. We are called to be salt and light in the world, pointing others to Jesus and His message of hope and salvation. The gospel is the most important message in the world. It is the message that has the power to transform lives and bring people into a relationship with God. It is the message that gives us hope for the future and the assurance of eternal life. As we share the gospel with others, we can be confident that God will use it to bring people to Himself and to build His kingdom on earth. ...",
    },
    {
      id: 2,
      title: "10 Tips for Better Time Management",
      author: "Jane Smith",
      authorId: 2,
      likes: 20,
      comments: 8,
      tag: "Productivity",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 3,
      title: "The Benefits of Prayer",
      author: "Bob Johnson",
      authorId: 3,
      likes: 15,
      comments: 3,
      tag: "Spritiual Growth",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];
  
  const featuredPost = posts[0];
  const restPosts = showMore ? posts.slice(1) : posts.slice(1, maxPosts);

  return (
    <>
<div className="featured-posts w-screen">
      <h2 className="text-center text-3xl font-bold text-slate-200">Featured Posts</h2>
      <div className=" px-40 py-4 h-[270px] relative  ">
        <div className="flex justify-between">

        <h3 className="text-2xl font-bold  text-slate-800 py-2 mb-2 ">{featuredPost.title}</h3>
         <p className=" text-xl font-thin before:content-['• '] ">{featuredPost.tag}</p>
        </div>
        <div className=" flex justify-start align-middle  ">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-20 h-20"
          />
        <p className="text-lg font-bold pt-5 px-4">By {featuredPost.author}</p>
        <div class="container  my-20 w-4/5 py-5 px-12 bg-white rounded-xl shadow-2xl">
        <p className="text-lg">
          {featuredPost.content.slice(0, 1000)}...
          <Link> <button className=" bg-[#719da6ec] p-3 rounded-lg hover:text-white  duration-75 md:text-xl">

          Show More
          </button>
          </Link>
        </p>
        </div>
          </div>
      </div>
        
        <div className="bg-[#fff] px-40 py-4">  
      <div className=" flex-col justify-center px-4 mt-64">
        {restPosts.map((post) => (

            <PostCard
              title={post.title}
              author={post.author}
              tag={post.tag}
              likes={post.likes}
                key={post.id}
            />

        ))}
      </div>
      </div>
      {!showMore && posts.length > maxPosts && (
        <button
          className="block mx-auto"
          onClick={toggleShowMore}
        >
          Show More
        </button>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default FeaturePostSection;