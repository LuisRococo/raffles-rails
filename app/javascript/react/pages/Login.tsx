import React, { useState } from "react";
import { postLogin } from "../helpers/api";
import { saveSession } from "../helpers/auth";
import { ApiStatusEnum } from "../interfaces/apiInterfaces";
import jwtDecode from "jwt-decode";
import { setSession } from "../redux/slices/sessionSlice";
import { useDispatch } from "react-redux";
import { routes } from "../routes";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const data = await postLogin(username, password);

      if (data.status === ApiStatusEnum.success) {
        const tokenDecoded: any = jwtDecode(data.data.payload);
        dispatch(setSession({ payload: tokenDecoded.user_id }));
        navigate(routes.home);
      } else {
        alert("Username or password are incorrect");
        setPassword("");
      }
    } catch (error) {
      alert("There was an error, check your data");
    }
  }

  return (
    <div style={styles.background}>
      <div className="min-height">
        <div className="container">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="my-2">Login</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <label>Password: </label>
                    <input
                      type="password"
                      className="form-control mb-3"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />

                    <input
                      className="btn btn-md btn-primary w-100 mt-4"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: "url('assets/gray-bg.svg')",
    overflow: "auto",
  },
};

export default Login;
