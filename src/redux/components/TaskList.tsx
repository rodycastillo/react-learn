// import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CardList } from "./CardList";

export const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      <h2 className="text-center font-medium  text-xl uppercase underline">
        TaskList
      </h2>

      <div className="text-center">
        {tasks.map((task) => (
          <CardList item={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};
