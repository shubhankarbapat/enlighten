import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("stripeseller@gmail.com");
  const [password, setPassword] = useState("ssssss");
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) navigate("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("Login response", data);
      setUser(data);
      // Save to LocalStorage
      window.localStorage.setItem("user", JSON.stringify(data));
      navigate("/user");

      // setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="jumbotron square">Login</div>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
        <p className="text-center p-3">
          Not yet registered? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
