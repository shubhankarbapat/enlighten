import { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

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
];
function TopNav() {
  const [current, setCurrent] = useState("");

  const onClick = ({ key }) => {
    console.log("click", key);
    setCurrent(key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.key}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}
export default TopNav;
