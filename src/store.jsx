import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo, deleteToDo);

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      console.log(action);
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
