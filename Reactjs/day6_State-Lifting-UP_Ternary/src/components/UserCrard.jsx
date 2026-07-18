import React from "react";

const UserCrard = ({ user }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 border rounded-xl bg-gray-100">
      <div className="w-50 h-50 flex justify-center m-2 border rounded">
        <img className="w-full h-full" src={user.image} alt="img" />
      </div>
      <div className="flex flex-col">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.password}</p>
      </div>
      <button className="bg-red-600 p-2 font-medium border rounded">
        Delete
      </button>
    </div>
  );
};

export default UserCrard;
