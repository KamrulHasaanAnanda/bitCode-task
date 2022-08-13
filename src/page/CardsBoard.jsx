import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BoardServices from "../apis/BoardServices";
function CardsBoard() {
  const [boardList, setboardList] = useState();
  const navigate = useNavigate();
  let { id, card } = useParams();

  let getBoardCardList = async () => {
    let res = await BoardServices.listCards(card);
    if (res.status === 200) {
      setboardList(res.data);
    }
    // console.log("res", res);
  };

  console.log("boardList", boardList);
  useEffect(() => {
    getBoardCardList();
  }, []);
  const showCards = (id) => {
    navigate("/cards/" + id);
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
            View
          </button>
        </td>
      </tr>
    ));
  return (
    <div className="container">
      <div className="board">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Card List</h1>
          <Link to={`/cards/${id}/${card}/create`}>
            <button className="btn btn-primary">Create Card</button>
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

export default CardsBoard;
