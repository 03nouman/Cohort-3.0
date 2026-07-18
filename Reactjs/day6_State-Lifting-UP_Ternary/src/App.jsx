import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCrard from "./components/UserCrard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300">
      <Register setUsers={setUsers} setToggle={setToggle} />
      {/* {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
      )} */}

      <div className="w-60">
        {users.map((elem,index) => (
          <UserCrard key={index} user={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
