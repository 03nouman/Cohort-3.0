import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React State Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
        <About />
      <Contact />
    </div>
  );
};

export default App;
