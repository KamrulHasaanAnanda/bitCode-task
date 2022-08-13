import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BoardServices from "../apis/BoardServices";

function ListBoard() {
  const [boardList, setboardList] = useState();
  const navigate = useNavigate();
  let { id } = useParams();

  let getBoardList = async () => {
    let res = await BoardServices.listBoard(id);
    if (res.status === 200) {
      setboardList(res.data);
    }
    // console.log("res", res);
  };

  //   console.log("boardList", boardList);
  useEffect(() => {
    getBoardList();
  }, []);
  const showCards = (cardid) => {
    navigate("/board/" + id + "/cards/" + cardid);
  };

  let tableData =
    boardList?.length > 0 &&
    boardList.map((board, index) => (
      <tr key={index}>
        <td>{board.name}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => showCards(board.id)}
          >
            Show cards
          </button>
        </td>
      </tr>
    ));
  return (
    <div className="container">
      <div className="board">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Board List</h1>
          <Link to={`/board/${id}/list/create`}>
            <button className="btn btn-primary">Create List</button>
          </Link>
        </div>

        <div className="table-board">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListBoard;
