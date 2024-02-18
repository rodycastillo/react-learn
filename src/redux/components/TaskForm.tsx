import React from "react";
import { useDispatch } from "react-redux";
import { Task } from "../interfaces/general";
import { addTaskReducer } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

export const TaskForm = () => {
  const [task, setTask] = React.useState<Task>({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask({ ...task, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(task).includes("")) return;
    const taskValue = {
      ...task,
      id: String(Math.random()),
      completed: false,
    };
    dispatch(addTaskReducer(taskValue));
    return navigate("/");
  };

  return (
    <form
      className="w-full max-w-[500px] mx-auto rounded-md p-6 bg-slate-300 overflow-hidden text-wrap"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-xl font-bold uppercase underline">
        Task Form
      </h2>
      <code>{JSON.stringify(task, null, 2)}</code>
      <br />
      <input
        className="w-full p-4 rounded-md my-3 font-regular uppercase"
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        className="w-full p-4 rounded-md my-3 font-regular uppercase"
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <button
        className="w-full p-4 rounded-md mt-3 font-bold uppercase  text-white bg-green-400"
        type="submit"
        disabled={task.title === "" || task.description === ""}
      >
        ADD
      </button>
    </form>
  );
};
