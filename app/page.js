'use client'
import Header from "@/components/Header"
import { useState, useEffect } from "react"

export default function Home() {
  const [task, setTask] = useState("")
  const [addTask, setAddTask] = useState(() => {
    // Get initial state from localStorage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  useEffect(() => {
    // Save tasks to localStorage whenever addTask changes
    localStorage.setItem('tasks', JSON.stringify(addTask));
  }, [addTask]);

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const addValue = () => {
    setAddTask(prev => [...prev, { id: prev.length + 1, task: task, completed: false }])
    setTask("")
  }

  const deleteTask = (id) => {
    const newList = addTask.filter((item) => item.id != id)
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

  return (
    <>
      <Header />
      <div className="w-full max-w-md mx-auto mt-12 p-2">
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
          <h2 className="text-lg font-medium mt-4">Tasks list:</h2>
          <ul className="list-disc list-inside mt-2">
            {addTask.map((item, index) => (
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
      </div>
    </>
  )
}
