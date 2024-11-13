import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

// reducer: 함수, state를 수정하는 곳
const reducer = (state = 0, action) => {
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  }
  return state;
};

// store: state(데이터)를 저장하는 곳
// createStore: store을 만듦
// createStore(reducer)
const store = createStore(reducer);

// dispatch에 action값을 넣어서 reducer에서 action값에 맞게 state를 수정
store.dispatch({ type: "ADD" });

console.log(store.getState());
