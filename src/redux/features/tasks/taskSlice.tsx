import { createSlice } from "@reduxjs/toolkit";
import { tasksInitialState } from "../../interfaces/general";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: tasksInitialState[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

// const localInitialState = JSON.parse(localStorage.getItem("taskSlice"));

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskReducer: (state, { payload }: PayloadAction<any>) => {
      state.push(payload);
    },
    deleteTaskReducer: (state, { payload }: PayloadAction<string>) => {
      const taskFound = state.find((task) => task.id === payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    updateTaskReducer: (state, { payload }: PayloadAction<any>) => {
      const taskFound = state.find((task) => task.id === payload.id);
      if (taskFound) {
        state[state.indexOf(taskFound)] = payload;
      }
    },
  },
});

export const { addTaskReducer, deleteTaskReducer, updateTaskReducer } =
  taskSlice.actions;
export default taskSlice.reducer;

// continue with this video
// https://www.youtube.com/watch?v=A8gd1EWOCyA
