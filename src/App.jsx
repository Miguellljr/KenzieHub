import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <div>Carregando...</div> : <RoutesMain />}
      <ToastContainer position="top-right" autoClose={2 * 1000} theme="dark" />
    </>
  );
}

export default App;
