import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoardServices from "../apis/BoardServices";

function ViewCard() {
  const [cardList, setcardList] = useState();
  let { id } = useParams();
  // const navigate = useNavigate();
  //   console.log("organizationId", organizationId);
  let getCardList = async () => {
    let res = await BoardServices.showCard(id);
    if (res.status === 200) {
      setcardList(res.data);
    }
    // console.log("res", res);
  };
  console.log("cardList :>> ", cardList);
  useEffect(() => {
    getCardList();
  }, []);
  return (
    <div className="container my-5">
      <h1>Card details</h1>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{cardList?.name}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p className="card-text">{cardList?.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
