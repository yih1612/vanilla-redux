import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

export default function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDelete}>❌</button>
    </li>
  );
}
