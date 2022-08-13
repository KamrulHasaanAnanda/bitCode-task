import axios from "axios";

let BoardServices = {};

BoardServices.addBoard = async (name, desc) => {
  let url = `${process.env.REACT_APP_API}/boards?name=${name}&desc=${desc}&key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.post(url);
  //   console.log("res", res);
  return res;
};

BoardServices.getBoards = async (organizationId) => {
  let url = `${process.env.REACT_APP_API}/organizations/${organizationId}/boards?key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;
  let res = await axios.get(url);
  //   console.log("res", res);
  return res;
};

BoardServices.deleteBoard = async (id) => {
  let url = `${process.env.REACT_APP_API}/boards/${id}?&key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.delete(url);
  //   console.log("res", res);
  return res;
};

BoardServices.updateBoard = async (id, name, desc) => {
  let url = `${process.env.REACT_APP_API}/boards/${id}?name=${name}&desc=${desc}&key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.put(url);
  //   console.log("res", res);
  return res;
};
BoardServices.listBoard = async (id) => {
  let url = `${process.env.REACT_APP_API}/boards/${id}/lists?key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.get(url);
  //   console.log("res", res);
  return res;
};

BoardServices.listCards = async (id) => {
  let url = `${process.env.REACT_APP_API}/lists/${id}/cards?key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.get(url);
  //   console.log("res", res);
  return res;
};

BoardServices.addCard = async (id, name, desc) => {
  let url = `${process.env.REACT_APP_API}/lists?name=${name}&desc=${desc}&idBoard=${id}&key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.post(url);
  //   console.log("res", res);
  return res;
};
BoardServices.showCard = async (id) => {
  let url = `${process.env.REACT_APP_API}/cards/${id}?key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.get(url);
  //   console.log("res", res);
  return res;
};
BoardServices.createCard = async (id, name, desc) => {
  let url = `${process.env.REACT_APP_API}/cards?name=${name}&desc=${desc}&idList=${id}&key=${process.env.REACT_APP_APP_KEY}&token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let res = await axios.post(url);
  //   console.log("res", res);
  return res;
};

export default BoardServices;
