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
import UserContextProvider from "./context/UserContextProvider";
import UserIndex from "./pages/user";
import BecomeInstructor from "./pages/user/become-instructor";
import CourseCreate from "./pages/instructor/course/create";
import StripeCallback from "./pages/stripe/callback";
import InstructorIndex from "./pages/instructor";

function App() {
  return (
    <UserContextProvider>
      <div>
        <div>
          <ToastContainer position="top-center" />
          <TopNav />
        </div>

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user" element={<UserIndex />}></Route>
          <Route path="/instructor" element={<InstructorIndex />}></Route>
          <Route path="/stripe/callback" element={<StripeCallback />}></Route>
          <Route
            path="/instructor/course/create"
            element={<CourseCreate />}
          ></Route>
          <Route
            path="/user/become-instructor"
            element={<BecomeInstructor />}
          ></Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
