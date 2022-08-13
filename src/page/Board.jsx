import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BoardServices from "../apis/BoardServices";
import { toastifyAlertSuccess } from "../components/alert/tostifyALert";

function Board() {
  const [boardList, setboardList] = useState();
  let organizationId = localStorage.getItem("organizations");
  const navigate = useNavigate();
  //   console.log("organizationId", organizationId);
  let getBoardList = async () => {
    let res = await BoardServices.getBoards(organizationId);
    if (res.status === 200) {
      setboardList(res.data);
    }
    // console.log("res", res);
  };

  //   console.log("boardList", boardList);
  useEffect(() => {
    getBoardList();
  }, []);

  const deleteBoard = async (id) => {
    let res = await BoardServices.deleteBoard(id);
    if (res.status === 200) {
      getBoardList();
      toastifyAlertSuccess("Successfully Deleted", "top-right");
    }
  };

  const updateBoard = (id) => {
    navigate("/board/update/" + id);
  };
  const showBoard = (id) => {
    navigate("/board/list/" + id);
  };

  const logOut = () => {
    toastifyAlertSuccess("Successfully Logout", "top-right");
    localStorage.removeItem("organizations");
    navigate("/");
  };
  let tableData =
    boardList?.length > 0 &&
    boardList.map((board, index) => (
      <tr key={index}>
        <td>{board.name}</td>
        <td className="d-flex justify-content-evenly">
          <button className="btn btn-info" onClick={() => showBoard(board.id)}>
            Show
          </button>
          <button
            className="btn btn-primary"
            onClick={() => updateBoard(board.id)}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteBoard(board.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  return (
    <div className="container">
      <div className="board">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Boards</h1>
          <div className="d-flex" style={{ gap: "10px" }}>
            <Link to={"/board/create"}>
              <button className="btn btn-primary">Create</button>
            </Link>
            <button className="btn btn-danger" onClick={logOut}>
              Log out
            </button>
          </div>
        </div>

        <div className="table-board">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Board;
