import { useState, useContext, useEffect } from "react";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

function TopNav() {
  const [current, setCurrent] = useState("/");
  const { user, setUser } = useContext(UserContext);
  // console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setCurrent(path);
  }, [location.pathname]);

  const items = [
    {
      label: "App",
      key: "/",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Login",
      key: "/login",
      icon: <LoginOutlined />,
    },
    {
      label: "Register",
      key: "/register",
      icon: <UserAddOutlined />,
    },
    {
      label: "Create Course",
      key: "/instructor/course/create",
      icon: <CarryOutOutlined />,
    },
    {
      label: "Become Instructor",
      key: "/user/become-instructor",
      icon: <TeamOutlined />,
    },
    {
      label: "Instructor Dashboard",
      key: "/instructor",
      icon: <TeamOutlined />,
    },
    {
      label: "Logout",
      key: "/logout",
      icon: <LogoutOutlined />,
      className: "logout-link",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (item.key === "/logout" && user != null) {
      return !!user; // Show Logout link only if user is logged in
    }
    if ((item.key === "/login" || item.key === "/register") && user != null) {
      return false;
    }
    if (user && user.role) {
      if (item.key === "/instructor/course/create") {
        return user.role.includes("Instructor");
      }
      if (item.key === "/user/become-instructor") {
        return !user.role.includes("Instructor");
      }
      if (item.key == "/instructor") {
        return user.role.includes("Instructor");
      }
    }
    // Show other links always
    return true;
  });

  const onClick = async ({ key }) => {
    // console.log("click", key);
    setCurrent(key);
    if (key === "/logout") {
      setUser(null);
      window.localStorage.removeItem("user");
      const { data } = await axios.get(`/api/logout`);
      toast.success(data.message);
      setCurrent("/");
      navigate("/login");
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="mb-2"
      style={{ display: "block" }}
    >
      {filteredItems.map((item) => (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          style={item.key === "/logout" ? { float: "right" } : {}}
        >
          <Link to={item.key}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}
export default TopNav;
