import { useSelector, useDispatch } from 'react-redux';

import { closeTask } from "./dailyTasksSlice";
import { Task } from "./Task";
import { AddTask } from "./AddTask";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.dailyTasks.tasks);

  return (
    <div>
      <h1>Hello Manish, your daily tasks are?</h1>
      <AddTask />

      <ul>
        {
          tasks.map((task, index) => {
            return <li key={index}>
              <Task text={task} />
              <input type="button" value="Close Task" onClick={() => dispatch(closeTask(task))} />
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
