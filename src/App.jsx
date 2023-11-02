import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="top-right" autoClose={2 * 1000} theme="dark" />
    </>
  );
}

export default App;
