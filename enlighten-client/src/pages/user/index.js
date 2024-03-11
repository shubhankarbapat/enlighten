import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";

const UserIndex = () => {
  const { user } = useContext(UserContext);

  return (
    <UserRoute>
      <h1 className="jumbotron square">User DashBoard</h1>
    </UserRoute>
  );
};

export default UserIndex;
