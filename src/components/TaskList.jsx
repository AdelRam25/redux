import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.todo);

  const filteredTasks =
    filter == "done"
      ? tasks.filter((task) => task.completed)
      : filter == "notDone"
      ? tasks.filter((task) => !task.completed)
      : tasks;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-black max-w-screen-lg mx-auto">
      <h3 className="text-2xl font-semibold text-black mb-4">Task List</h3>
      {filteredTasks.length == 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
