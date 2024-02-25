import { useSelector, useDispatch } from 'react-redux';

import { closeTask } from "./dailyTasksSlice";
import { Task } from "./Task";
import { AddTask } from "./AddTask";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.dailyTasks.tasks);

  return (
    <div className="flex flex-col gap-7 min-w-[700px] h-full min-h-screen p-7 text-amber-700">
      <h1 className="text-3xl" >Hello Manish, your daily tasks are?</h1>
      <AddTask />

      <ul>
        {
          tasks.map((task, index) => {
            return <li key={index} className="flex justify-center items-center w-fit gap-20 my-7 p-3 bg-blue-100 rounded">
              <Task text={task} />
              <input className="p-2 px-3 bg-amber-100 rounded-full cursor-pointer" type="button" value="X" 
                onClick={() => dispatch(closeTask(task))} />
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
