import { createRoot } from "react-dom/client";
import "./index.css";
import Approutes from "./routes/Approutes.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Approutes />
    <ToastContainer />
  </Provider>,
);
