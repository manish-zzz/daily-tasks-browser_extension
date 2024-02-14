import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./dailyTasksSlice";

export function AddTask() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  return (
    <div className="flex gap-7">
      <input className="p-3 bg-amber-100 rounded outline-amber-700" type="text" placeholder="New Task..." 
        onChange={(e) => setNewTask(e.target.value)} />
      <input className="p-3 bg-amber-100 rounded font-bold cursor-pointer" type="button" value="Add Task" 
        onClick={() => dispatch(addTask(newTask))} />
      <br />
    </div>
  );
}