import React from "react";

let root = document.querySelector("#root");

const h1 = React.createElement("h1", null, "Hello, React!");
ReactDOM.createRoot(root).render(h1);
