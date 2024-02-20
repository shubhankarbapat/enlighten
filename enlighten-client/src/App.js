import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "./css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
import Login from "./pages/Login";
import SingUp from "./pages/Register";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
        <ToastContainer position="top-center" />
        <Navbar />

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
