import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

export default function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      {text} <button onClick={onDelete}>❌</button>
    </li>
  );
}
