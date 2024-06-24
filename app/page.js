'use client'
import Header from "@/components/Header"

// to use useState or useEffect you need to use the client side you cannot use the server side rendering 
// to fix that you need to add  'use client' on the top of the file
import { useState } from "react" 

export default function Home() {

  const [task, setTask] = useState("")
  const [addTask,setAddTask] = useState([])

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const addValue = ()=> {
    setAddTask(prev =>{
      return [...prev,{id:prev.length +1, task:task }]
    })
    setTask("")
  }

  const deleteTask = (id) => {
    const newList = addTask.filter((item) => item.id != id)
    setAddTask(newList)
  }

  return (
    <>

    <Header />
        <br/>
        <h1>ToDo list  </h1>
        <br/>
        <div>
          <label>Add a task </label>
          <input type="text" placeholder="add a task here" id="task" value={task} onChange={handleChange}/>
          <br/>
          <br/>
          <button onClick={addValue}>click here to add task</button>
          <br/>
          <br/>
          <h2>Tasks list :</h2>

          <ul>
            {addTask.map((item) => {
              return <li key={item.id}>{item.task} 
              <button onClick={() => deleteTask(item.id)}>  <span> &emsp; delete</span></button>
              </li>
            })}
          </ul>
          
        </div>
        
        
    
    </>
  )
}
