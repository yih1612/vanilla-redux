import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail() {
  const param = useParams().id;
  const toDos = useSelector((state) => state);
  const detail = toDos.find((toDo) => toDo.id === parseInt(param));

  return (
    <>
      <h1>Detail</h1>
      <h5>id: {detail?.id}</h5>
      <h5>text: {detail?.text}</h5>
    </>
  );
}
