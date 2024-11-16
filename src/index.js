import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

num.innerText = 0;

// reducer: 함수. state를 수정하는 곳
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

const onChange = () => {
  num.innerText = store.getState();
};

// store.subscribe(function);
// store의 변화가 감지되면 function 실행
store.subscribe(onChange);

const handleAdd = () => {
  // dispatch에 action값을 넣어서 reducer에서 action값에 맞게 state를 수정
  store.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
