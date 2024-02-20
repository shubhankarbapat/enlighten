import React, { useState } from "react";
import { Flex, Image, Menu } from "antd";
import Logo from "../Media/logo.png";
import { Link } from "react-router-dom";
import "../css/styles.css";

const items = [
  {
    label: "About Us",
    key: "/",
  },
  {
    label: "Courses",
    key: "/login",
  },
  {
    label: "Package",
    key: "/register",
  },
  {
    label: "Contact Us",
    key: "/register",
  },
  {
    label: "Profile",
    key: "/register",
  },
];

const navbar = {
  background: "#1d6361",
  padding: "20px 150px",
};

const navMenu = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  background: "#1D6361",
  borderBottom: "0",
  fontSize: "medium",
  fontWeight: "400",
};

const navMenuItems = {
  textDecoration: "none",
  color: "white",
};

export default function Navbar() {
  const [current, setCurrent] = useState("");

  const onClick = ({ key }) => {
    console.log("click", key);
    setCurrent(key);
  };

  return (
    <>
      <Flex justify="space-between" style={navbar}>
        <Image width={200} src={Logo} />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={navMenu}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} style={{ margin: "0 20px" }}>
              <Link style={navMenuItems} to={item.key}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Flex>
    </>
  );
}
