import { useState } from "react";

function App() {
  const [task, settask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        text: newTask,
      };
      settask([...task, newTaskObj]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);
    settask(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      settask(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      settask(updatedTasks);
    }
  }

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center w-full">
        <section className="flex p-10">
          <h1 className="text-4xl font-bold text-center">TO-DO LISTS</h1>
        </section>

        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              name="task"
              type="text"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
