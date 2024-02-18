import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../interfaces/general";
import { updateTaskReducer } from "../features/tasks/taskSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";

export const CardEdit = () => {
  const [task, setTask] = React.useState<Task>({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const stateTask = useSelector((state: RootState) => state.tasks);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask({ ...task, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(task).includes("")) return;
    const taskValue = {
      ...task,
    };
    dispatch(updateTaskReducer(taskValue));
    return navigate("/");
  };

  React.useEffect(() => {
    const taskItem = stateTask.find((i) => i.id === id);
    if (taskItem) {
      setTask(taskItem);
    }
  }, []);

  return (
    <form
      className="w-full max-w-[500px] mx-auto rounded-md p-6 bg-slate-300 overflow-hidden text-wrap"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-xl font-bold uppercase underline">
        Task Form Edit
      </h2>
      <code>{JSON.stringify(task, null, 2)}</code>
      <br />
      <input
        className="w-full p-4 rounded-md my-3 font-regular uppercase"
        type="text"
        name="title"
        value={task.title}
        placeholder="title"
        onChange={handleChange}
      />
      <input
        className="w-full p-4 rounded-md my-3 font-regular uppercase"
        name="description"
        value={task.description}
        placeholder="description"
        onChange={handleChange}
      />
      <button
        className="w-full p-4 rounded-md mt-3 font-bold uppercase  text-white bg-green-400"
        type="submit"
        disabled={task.title === "" || task.description === ""}
      >
        Update
      </button>
    </form>
  );
};
