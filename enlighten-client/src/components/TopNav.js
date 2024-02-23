import { useState, useContext } from "react";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

function TopNav() {
  const [current, setCurrent] = useState("");
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();

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
    // Show other links always
    return true;
  });

  const onClick = async ({ key }) => {
    console.log("click", key);
    setCurrent(key);
    if (key === "/logout") {
      setUser(null);
      window.localStorage.removeItem("user");
      const { data } = await axios.get(`/api/logout`);
      toast.success(data.message);
      navigate("/login");
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
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
