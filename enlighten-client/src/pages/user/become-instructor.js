import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { toast } from "react-toastify";
import {
  UserSwitchOutlined,
  LoadingOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const BecomeInstructor = () => {
  // state
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const becomeInstructor = () => {
    setLoading(true);
    axios
      .post("/api/make-instructor", {
        user: user,
      })
      .then((res) => {
        // console.log(res);
        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Stripe onboarding failed. Try again.");
        setLoading(false);
      });
  };
  return (
    <>
      <h1 className="jumbotron text-center square">Become Instructor</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="pt-4">
              <UserSwitchOutlined className="display-1" />
              <br />
              <h2>Setup payout to publish courses on enlighten</h2>
              <p className="lead text-warning">
                Enlighten parterns with stripe to transfer earning to your bank
                account.
              </p>

              <Button
                className="mb-3"
                type="primary"
                block
                shape="round"
                icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
                size="large"
                onClick={becomeInstructor}
                disabled={
                  (user && user.role && user.role.includes("Instructor")) ||
                  loading
                }
              >
                {loading ? "Processing.." : "Payout Setup"}
              </Button>

              <p className="lead">
                You will be redirected to stripe to complete onboarding process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
