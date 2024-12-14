import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all', 

  };

const TodoSlice = createSlice({
    name: 'todo',
    initialState,
   reducers: {
    addTask: (state, action) => {
      const newTask = {
        name: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);

    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

  },
});

export const { addTask, deleteTask, toggleComplete, setFilter } =TodoSlice.actions;

export default TodoSlice.reducer;
