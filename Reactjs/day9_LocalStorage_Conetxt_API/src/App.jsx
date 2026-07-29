import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  // console.log("app rendering");
  const [toggle, setToggle] = useState(false);
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  return (
    <div className="h-screen bg-black text-white flex flex-col gap-2">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div>
          <Form users={users} setUsers={setUsers} setToggle={setToggle} />
        </div>
      ) : (
        <div className="w-full mx-2 flex gap-4 flex-wrap overflow-auto">
          {users.map((elem, idx) => (
            <UserCard key={idx} user={elem} setToggle={setToggle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
