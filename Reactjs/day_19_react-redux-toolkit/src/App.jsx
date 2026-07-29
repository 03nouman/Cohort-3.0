import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./app/store";
import { decrement, increment } from "./features/counterSlice";

const App = () => {
  let { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div
      style={{
        background: "black",
        color: "white",
        height: "100vh",
        padding: "0px",
        margin: "0px",
      }}
    >
      <h1>React Redux Toolkit</h1>
      <h1>Count is: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{ padding: "8px", fontWeight: 500 }}
      >
        increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ padding: "8px", fontWeight: 500 }}
      >
        decrement
      </button>
    </div>
  );
};

export default App;
