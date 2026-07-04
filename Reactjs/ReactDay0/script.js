let h1 = document.createElement("h1");
h1.textContent = "Hello, World!";
document.body.append(h1);

// React DOM, Virtual DOM

let rh1 = React.createElement(
  "h1",
  null,
  React.createElement("span", null, "Hello, React World!"),
);

let realDomElem = document.querySelector("#root");

let rootOfReact = ReactDOM.createRoot(realDomElem);

rootOfReact.render(rh1);
