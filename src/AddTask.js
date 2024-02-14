import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./dailyTasksSlice";

export function AddTask() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <input type="text" placeholder="New Task..." onChange={(e) => setNewTask(e.target.value)} />
      <input type="button" value="Add Task" onClick={() => dispatch(addTask(newTask))} />
      <br />
    </div>
  );
}