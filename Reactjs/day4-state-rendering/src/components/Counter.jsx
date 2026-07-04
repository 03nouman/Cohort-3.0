import React from "react";

const Counter = () => {
  console.log("component re-rendered");

  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Counter: {count}</h1>
      <button
        className="p-2 bg-amber-300 m-2 rounded"
        onClick={() => {
          // setCount(count + 1);// single state update, so the component will re-render and the value of count will be updated
          // console.log(count);: The value will be same, first component will re-render and then the value will be updated, so if you want to see the updated value, you can use useEffect hook
          setCount((prev) => prev + 1); // multiple state updates, so the component will re-render and the value of count will be updated
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
