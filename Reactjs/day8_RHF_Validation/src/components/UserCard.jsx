import React from "react";

const UserCard = ({ user, setToggle }) => {
  return (
    <div className="flex flex-col gap-2 border border-white p-2 w-60">
      <div>
        <img className="object-cover" src={user.image} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-2xl">{user.name}</p>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
      </div>
      <div className="flex gap-4">
        <button
          className="p-4 bg-amber-400 rounded cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          Update
        </button>
        <button className="p-4 bg-red-600 rounded cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
