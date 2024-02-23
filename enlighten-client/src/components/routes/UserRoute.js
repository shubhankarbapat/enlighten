import { useEffect, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/current-user");
      //   console.log(data);
      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      navigate("/login");
    }
  };

  return (
    <>
      {!ok ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default UserRoute;