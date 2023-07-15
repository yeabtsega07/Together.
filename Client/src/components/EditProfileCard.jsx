import React from "react";

function EditProfileCard(props) {
  return (
    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={props.username}
          onChange={props.handleUsernameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
          Bio
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="bio"
          placeholder="Tell us about yourself"
          value={props.bio}
          onChange={props.handleBioChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="avatar">
          Avatar URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="avatar"
          type="text"
          placeholder="Avatar URL"
          value={props.avatarUrl}
          onChange={props.handleAvatarUrlChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-[#38c0dbec] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={props.handleSave}
        >
          Save
        </button>
        <button
          className="bg-[#255f6bec] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={props.handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditProfileCard;

// import React, { useState } from 'react';

// function EditProfileCard({ user }) {
//   const [username, setUsername] = useState(user.username);
//   const [bio, setBio] = useState(user.bio);
//   const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

//   function handleUsernameChange(event) {
//     setUsername(event.target.value);
//   }

//   function handleBioChange(event) {
//     setBio(event.target.value);
//   }

//   function handleAvatarUrlChange(event) {
//     setAvatarUrl(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     // TODO: Handle form submission
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <form onSubmit={handleSubmit}>
//         <h2 className="text-lg font-medium mb-4">Edit Profile</h2>
//         <div className="mb-4">
//           <label htmlFor="username" className="block font-medium mb-2">Username</label>
//           <input type="text" id="username" className="border rounded-md px-3 py-2 w-full" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="bio" className="block font-medium mb-2">Bio</label>
//           <textarea id="bio" className="border rounded-md px-3 py-2 w-full" value={bio} onChange={handleBioChange} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="avatarUrl" className="block font-medium mb-2">Avatar URL</label>
//           <input type="text" id="avatarUrl" className="border rounded-md px-3 py-2 w-full" value={avatarUrl} onChange={handleAvatarUrlChange} />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Save Changes</button>
//       </form>
//     </div>
//   );
// }

// export default EditProfileCard;
