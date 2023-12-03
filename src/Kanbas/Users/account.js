import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const acc = await client.account();
    setAccount(acc);
    navigate("/Kanbas/account");
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };
  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="mt-3 ms-2">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control mb-1"
            placeholder="Password"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            className="form-control mb-1"
            placeholder="First Name"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            className="form-control mb-1"
            placeholder="Last Name"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            className="form-control mb-1"
            type="date"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control mb-1"
            type="email"
            placeholder="Email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-select mb-1"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary mb-2 w-100" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger mb-2 w-100" onClick={signout}>
            Sign Out
          </button>
          <br />
          <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}

export default Account;
