import { configureStore } from '@reduxjs/toolkit';

import dailyTasksReducer from "./dailyTasksSlice";

const store = configureStore({
  reducer: {
    dailyTasks: dailyTasksReducer
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;

