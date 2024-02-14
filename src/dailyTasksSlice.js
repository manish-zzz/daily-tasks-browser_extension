import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks_007')) || ["meditate", "hck", "dinner"],
};

const dailyTaskSlice = createSlice({
  name: 'dailyTasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks = [...state.tasks, action.payload]
      localStorage.setItem('tasks_007', JSON.stringify(state.tasks));
    },
    closeTask(state, action) {
      const newDailyTasks = state.tasks.filter(item => item!==action.payload);
      state.tasks = newDailyTasks
      localStorage.setItem('tasks_007', JSON.stringify(state.tasks));
    }
  }
});

export const { addTask, closeTask } = dailyTaskSlice.actions;
export default dailyTaskSlice.reducer;