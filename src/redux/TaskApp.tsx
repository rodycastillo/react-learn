// import React from "react";
import {
  BrowserRouter,
  // Switch,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "./store";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import NavBar from "./components/NavBar";
import "../App.css";
import { CardEdit } from "./components/CardEdit";

export const TaskApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/create-task" Component={TaskForm} />
          <Route path="/" Component={TaskList} />
          <Route path="/edit/:id" Component={CardEdit} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
