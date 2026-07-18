import React, { useState } from "react";

const App = () => {
  console.log("App rendering...");

  // useState: useState is use to maintain state and re-rendered its own parent component. it updates state and provide interactivity
  const [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  const [user, setUser] = useState({ name: "aman" });

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Count TWO: {count2}</h1>
      <h1>hello: {user.name}</h1>
      <button
        style={{ marginRight: "12px" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        style={{ marginRight: "12px" }}
        onClick={() => {
          count2++;
        }}
      >
        Increment TWO
      </button>
      <button
        onClick={() => {
          // user.name = "superman";
          setUser({ name: "spiderman" }); // it can re-rendred even if the value is same of an refernce, becoz passing a referce value every there is a new object is being passed
        }}
      >
        change user
      </button>
    </div>
  );
};

export default App;
