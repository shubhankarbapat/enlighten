import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const InstructorNav = () => {
  const [current, setCurrent] = useState("/instructor");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setCurrent(path);
  }, [location.pathname]);

  const items = [
    {
      label: "Dashboard",
      key: "/instructor",
      icon: <DashboardOutlined />,
    },
    {
      label: "Course Create",
      key: "/instructor/course/create",
      icon: <DashboardOutlined />,
    },
  ];

  const onClick = ({ key }) => {
    setCurrent(key);
    navigate(key);
  };

  return (
    <div className="nav flex-column nav-pills">
      <Menu items={items} onClick={onClick} selectedKeys={[current]}></Menu>
    </div>
  );
};

export default InstructorNav;
