import React from "react";

const UserCard = ({
  user,
  setToggle,
  deleteUser,
  setUpdatedUser,
  setUpdateMode,
}) => {
  return (
    <div className="flex flex-col gap-2 border-white p-2 w-54 bg-gray-700 border rounded-xl">
      <div className="">
        <img
          className="object-cover border rounded-2xl"
          src={user.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-2xl">{user.name}</p>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
      </div>
      <div className="flex gap-4">
        <button
          className="p-2 bg-amber-400 rounded cursor-pointer"
          onClick={() => {
            setUpdatedUser(user);
            setUpdateMode((prev) => !prev);
            setToggle((prev) => !prev);
          }}
        >
          Update
        </button>
        <button
          onClick={() => deleteUser(user.id)}
          className="p-2 bg-red-600 rounded cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
