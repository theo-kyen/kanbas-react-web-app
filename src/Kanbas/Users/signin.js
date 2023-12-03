import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/account");
  };
  return (
    <div className="mt-3 ms-3">
      <h1>Sign In</h1>
      <input
        className="form-control mb-1"
        value={credentials.username}
        placeholder="Username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        className="form-control mb-1"
        value={credentials.password}
        placeholder="Password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={signin} className="btn btn-danger">
        Sign In
      </button>
    </div>
  );
}

export default Signin;
