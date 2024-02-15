/* eslint-disable no-unused-vars */
import React, {useState} from "react"


function TodoList(){

  const [tasks, setTasks]= useState(["go work", "walk the dog", "eat breakfast", "taha"])
  const [newtasks, setNewTasks]= useState("")

  function handelInputChange(event){
    setNewTasks(event.target.value)
  }
  function addTasks(){
    if (newtasks.trim() !== ""){
      setTasks(t =>[...t, newtasks])
      setNewTasks("")
    }
  }
  function deleteTasks(index){
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }
  function moveTasksaUp(index){
    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index -1], updatedTasks[index]];
      setTasks(updatedTasks)
    }
  }
  function moveTasksaDown(index ){
    if (index < tasks.length -1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index +  1], updatedTasks[index]];
      setTasks(updatedTasks)
    }
  }



    return(
      <div className="to-do-list"> 
        <h1>ToDo List</h1>
        <div>
        <input type="text" value={newtasks} placeholder="Enter a task..." onChange={handelInputChange}/>
        <button className="add-button" onClick={addTasks}>Add</button>
        </div>
        <ol>
          {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTasks(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTasksaUp(index)}>
            👆
            </button>
            <button className="move-button" onClick={() => moveTasksaDown(index)}>
            👇
            </button>
          </li>
          )}
        </ol>
      </div>
    )
}

export default TodoList