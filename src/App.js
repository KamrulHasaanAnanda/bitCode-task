import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Router from "./router/Router";

function App() {
  return (
    <>
      {/* <Board/> */}
      <Router />
      <ToastContainer transition={Zoom} />
    </>
  );
}

export default App;
