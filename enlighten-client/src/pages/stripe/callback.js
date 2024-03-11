import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";

const StripeCallback = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      axios.post("/api/get-account-status").then((res) => {
        // console.log(res);
        setUser(res.data);
        // Save to LocalStorage
        window.localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/instructor");
      });
    }
  }, [user]);

  return (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-danger p-5"
    />
  );
};

export default StripeCallback;
