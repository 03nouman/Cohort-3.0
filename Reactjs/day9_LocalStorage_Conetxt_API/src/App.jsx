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
  const [updatedUser, setUpdatedUser] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col gap-2">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div>
          <Form
            updatedUser={updatedUser}
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            updateMode={updateMode}
          />
        </div>
      ) : (
        <div className="w-full mx-2 flex gap-4 flex-wrap overflow-auto">
          {users.map((elem) => (
            <UserCard
              deleteUser={deleteUser}
              key={elem.id}
              user={elem}
              setToggle={setToggle}
              setUpdatedUser={setUpdatedUser}
              setUpdateMode={setUpdateMode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
