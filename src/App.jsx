import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const newTaskObject = { text: newTask };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <section className="mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">TO-DO LIST</h1>
        </section>

        <div className="mb-4 flex items-center">
          <input
            name="task"
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
            className="block grow py-2 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none border rounded-md shadow-sm sm:text-sm"
          />
          <button
            onClick={addTask}
            className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>

        {tasks.length > 0 ? (
          <ul className="space-y-2">
            {tasks.map((taskItem, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-md p-2 shadow-sm"
              >
                <span>{taskItem.text}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => moveTaskUp(index)}
                    className="text-green-500 hover:text-green-700 focus:outline-none font-semibold text-sm py-1 px-2 rounded-md disabled:opacity-50"
                    disabled={index === 0}
                  >
                    Up
                  </button>
                  <button
                    onClick={() => moveTaskDown(index)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none font-semibold text-sm py-1 px-2 rounded-md disabled:opacity-50"
                    disabled={index === tasks.length - 1}
                  >
                    Down
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-red-500 hover:text-red-700 focus:outline-none font-semibold text-sm py-1 px-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center mt-4">No tasks yet!</p>
        )}
      </div>
    </div>
  );
}

export default App;