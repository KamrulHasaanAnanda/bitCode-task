import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../page/Board";
import CardCreate from "../page/CardCreate";
import CardsBoard from "../page/CardsBoard";
import CreateBoard from "../page/CreateBoard";
import ListBoard from "../page/ListBoard";
import ListCreate from "../page/ListCreate";
import Login from "../page/Login";
import UpdateBoard from "../page/UpdateBoard";
import ViewCard from "../page/ViewCard";
import AuthRoute from "./AuthRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<GuestRoute />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AuthRoute />}>
          <Route path="board" element={<Board />} />
          <Route path="board/create" element={<CreateBoard />} />
          <Route path="board/update/:id" element={<UpdateBoard />} />
          <Route path="board/list/:id" element={<ListBoard />} />
          <Route path="board/:id/list/create" element={<ListCreate />} />
          <Route path="cards/:id" element={<ViewCard />} />
          <Route path="board/:id/cards/:card" element={<CardsBoard />} />
          <Route path="cards/:id/:card/create" element={<CardCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
