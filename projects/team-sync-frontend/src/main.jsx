import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import Approutes from "./app/routes/Approutes";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Approutes />
  </Provider>,
);
