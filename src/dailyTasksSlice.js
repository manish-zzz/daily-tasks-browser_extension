import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: ["meditate", "hck", "dinner"],
};

const dailyTaskSlice = createSlice({
  name: 'dailyTasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks = [...state.tasks, action.payload]
    },
    closeTask(state, action) {
      const newDailyTasks = state.tasks.filter(item => item!==action.payload);
      state.tasks = newDailyTasks
    }
  }
});

export const { addTask, closeTask } = dailyTaskSlice.actions;
export default dailyTaskSlice.reducer;