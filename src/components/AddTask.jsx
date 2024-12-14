import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../TodoSlice';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    if (taskName) {
      dispatch(addTask(taskName))
      setTaskName('');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 mt-10 underline">To-Do List</h1>
      <form onSubmit={handleSubmit} className="flex justify-center mb-4">
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}  placeholder="Enter task" className="border border-black p-2 w-1/2 hover:scale-105 transition duration-500"/>

        <button className="bg-black  text-white p-2 ml-2">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
