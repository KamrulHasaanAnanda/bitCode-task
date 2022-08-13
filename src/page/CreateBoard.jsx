import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BoardServices from "../apis/BoardServices";
import { toastifyAlertSuccess } from "../components/alert/tostifyALert";

function CreateBoard() {
  const navigate = useNavigate();
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      desc: "",
    }
  );
  const handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    setState({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await BoardServices.addBoard(state.name, state.desc);
    if (res.status === 200) {
      setState({ name: "", desc: "" });
      toastifyAlertSuccess("Successfully created", "top-right");
      setTimeout(() => {
        navigate("/board");
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className="board">
        <h1>Create a Board</h1>

        <div className="inputs">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Board name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="Write Board name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              onChange={handleChange}
              value={state.desc}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button className="btn btn-primary" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBoard;
