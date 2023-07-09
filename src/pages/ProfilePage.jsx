import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import EditProfileCard from "../components/EditProfileCard";
import  avatar  from "../assets/avater.png";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const [showProfileCard, setShowProfileCard] = useState(true);

  const handleTabClick = (showProfile) => {
    setShowProfileCard(showProfile);
  };

  return (
    <>
    <div className="max-w-7xl h-screen overflow-y-hidden mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-[#ffffff36] overflow-hidden shadow-sm sm:rounded-lg">
        <div className="flex justify-center p-6 bg-[#ffffff37]">
          <button
            className={`px-4 py-2 mr-2 rounded-lg font-bold ${
              showProfileCard ? "bg-[#255f6bec] text-white" : "bg-[#ffffff23] text-[#255f6bec]"
            }`}
            onClick={() => handleTabClick(true)}
            >
            Profile
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-bold ${
              !showProfileCard ? "bg-[#255f6bec] text-white" : "bg-[#ffffff23] text-[#255f6bec]"
            }`}
            onClick={() => handleTabClick(false)}
            >
            Edit Profile
          </button>
        </div>
        <div className="p-6">
          {showProfileCard ? <ProfileCard avatar={avatar} name={"John doe"} writerCode={"#a12"} /> : <EditProfileCard />}
        </div>
      </div>
    </div>
    <Footer/>
            </>
  );
};

export default ProfilePage;
