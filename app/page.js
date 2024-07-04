'use client'
import Header from "@/components/Header"
import { useState, useEffect } from "react"

export default function Home() {
  const [task, setTask] = useState("")
  const [addTask, setAddTask] = useState([])
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }

  const addValue = () => {
    if (task.trim() === "") return;
    setAddTask(prev => [...prev, { id: Date.now(), task: task, completed: false }])
    setTask("")
  }

  const deleteTask = (id) => {
    const newList = addTask.filter((item) => item.id !== id)
    setAddTask(newList)
  }

  const toggleComplete = (id) => {
    setAddTask(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const editTask = (id, newTask) => {
    setAddTask(prev =>
      prev.map(item =>
        item.id === id ? { ...item, task: newTask } : item
      )
    )
  }

  const filteredTasks = addTask.filter((item) => {
    if (filter === "completed") {
      return item.completed;
    }
    if (filter === "incomplete") {
      return !item.completed;
    }
    return true;
  }).filter((item) => {
    return item.task.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      <Header />
      <div className="w-full max-w-md mx-auto mt-12 p-2">
        <br></br>
        <h1 className="text-center text-xl">ToDo list</h1>
        <div className="mt-2">
          <label htmlFor="task" className="block text-sm font-medium">Add a task</label>
          <input
            type="text"
            placeholder="Add a task here"
            id="task"
            value={task}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-lg px-2 py-1 mt-1"
          />
          <button onClick={addValue} className="block bg-blue-500 text-white font-semibold py-1 px-2 rounded-lg mt-2 hover:bg-blue-700">Click here to add task</button>
        </div>

        <div className="mt-4">
          <label htmlFor="search" className="block text-sm font-medium">Search tasks</label>
          <input
            type="text"
            placeholder="Search tasks"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full border border-gray-300 rounded-lg px-2 py-1 mt-1"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Filter tasks</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-full border border-gray-300 rounded-lg px-2 py-1 mt-1"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>

        <h2 className="text-lg font-medium mt-4">Tasks list:</h2>
        <ul className="list-disc list-inside mt-2">
          {filteredTasks.map((item, index) => (
            <li key={item.id} className="flex justify-between items-center mt-1">
              <span className={`flex-1 ${item.completed ? 'line-through' : ''}`}>
                {index + 1}. {item.task}
              </span>
              <button onClick={() => toggleComplete(item.id)} className={`ml-2 ${item.completed ? 'bg-green-500' : 'bg-yellow-500'} text-white font-semibold py-1 px-2 rounded-lg hover:bg-opacity-75`}>
                {item.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(item.id)} className="ml-2 bg-red-500 text-white font-semibold py-1 px-2 rounded-lg hover:bg-red-700">Delete</button>
              <button onClick={() => {
                const newTask = prompt('Edit task:', item.task);
                if (newTask) editTask(item.id, newTask);
              }} className="ml-2 bg-blue-500 text-white font-semibold py-1 px-2 rounded-lg hover:bg-blue-700">Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
