import React from "react";

const ProfileCard = ({ name, avatar, writerCode }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto text-center">
      <img
        className="h-25 w-25 rounded-full object-cover inline-block mb-2"
        src={avatar}
        alt="Avatar"
      />
      <p className="text-lg font-semibold mb-1">{name}</p>
      <p className="text-gray-600">{writerCode}</p>
    </div>
  );
};

export default ProfileCard;
