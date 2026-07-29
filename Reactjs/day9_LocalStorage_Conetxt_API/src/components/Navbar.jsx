import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="flex justify-between items-center gap-2 bg-black border-b text-white p-4">
      <div className=" rounded-full flex justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
          alt=""
          srcset=""
          className="w-16"
        />
      </div>
      <div className="flex justify-between gap-8 text-xl font-medium">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="p-4 bg-blue-600 rounded font-medium cursor-pointer"
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default Navbar;
