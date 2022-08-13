import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastifyAlertSuccess } from "../components/alert/tostifyALert";
function Login() {
  const [apiKey, setapiKey] = useState();
  const navigate = useNavigate();

  let authorize = async () => {
    let url = `${process.env.REACT_APP_API}/members/me?key=${apiKey}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

    let res = await axios.get(url);
    if (res.status === 200) {
      let url2 = `${process.env.REACT_APP_API}/members/me/organizations?key=${apiKey}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;
      let res2 = await axios.get(url2);
      if (res2.status === 200) {
        localStorage.setItem("organizations", res2.data[1]?.id);
        toastifyAlertSuccess("Successfully authorized", "top-right");
        setTimeout(() => {
          navigate("/board");
        }, 1000);
      }
    }
  };
  return (
    <div className="container board">
      <h1>Login</h1>

      <div className="inputs">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Api key
          </label>
          <input
            type="text"
            className="form-control"
            name="apiKey"
            value={apiKey}
            onChange={(e) => setapiKey(e.target.value)}
            placeholder="Write Api Key"
          />
        </div>

        <button className="btn btn-primary" onClick={authorize}>
          Authorize
        </button>
      </div>
    </div>
  );
}

export default Login;
