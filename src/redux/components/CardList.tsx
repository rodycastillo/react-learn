import { useDispatch } from "react-redux";
import { deleteTaskReducer } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

export const CardList = ({ item }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    return dispatch(deleteTaskReducer(id));
  };

  const handleEdit = (id: string) => {
    return navigate(`/edit/${id}`);
  };

  return (
    <div className="w-full max-w-[300px] mx-auto my-5 p-5 rounded-md bg-slate-300 overflow-hidden text-wrap">
      <h2 className="font-bold font-Popp text-md capitalize">{item.title}</h2>
      <p className="text-left my-2">
        <span className="font-bold">Description: </span>
        <span className="capitalize text-wrap">{item.description}</span>
      </p>
      <div className="w-full flex justify-between">
        <button
          onClick={() => handleDelete(item.id)}
          className=" cursor-pointer  w-[48%] px-3 py-2 bg-red-500 text-white rounded-md uppercase font-bold"
        >
          Delete
        </button>
        <button
          onClick={() => handleEdit(item.id)}
          className=" cursor-pointer  w-[48%] px-3 py-2 bg-blue-500 text-white rounded-md uppercase font-bold"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
