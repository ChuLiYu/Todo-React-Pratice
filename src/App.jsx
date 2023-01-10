import { useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm'
import TaskList from './components/TaskList'



function App() {

  const [tasks, setTasks] = useState([
    { "id": 1, "title": "Task1", "isCompleted": false },
    { "id": 2, "title": "Task2", "isCompleted": false }
  ])

  // Temp state
  const [updateData, setUpdateData] = useState('')
  const [newTask, setNewTask] = useState('')

  //Add new task 
  const addTask = () => {
    setTasks([...tasks, {
      "id": tasks.length + 1,
      "title": newTask,
      "isCompleted": false
    }])
    setNewTask('')
  }

  //Change task for update
  const changeTask = (e) => {
    let newTask = {
      id: updateData.id,
      title: e.target.value,
      isCompleted: updateData.isCompleted ? true : false
    }
    setUpdateData(newTask)
  }

  //Update changed task
  const updateTask = () => {
    let notChangeTasks = [...tasks].filter(task => task.id !== updateData.id)
    let updateTasks = [...notChangeTasks, updateData]
    setTasks(updateTasks)
    setUpdateData('')
  }

  //Cancel Update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  //Delete Task
  const deleteTask = (id) => {
    let newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const markTaskDone = (id) => {
    let newTasks = tasks.map(task => {
      if (task.id === id) { return ({ ...task, isCompleted: !task.isCompleted }) }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <>
      <span><h1>Todo List</h1></span>
      {updateData && updateData ?
        (<EditTaskForm changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate} />) :
        (<AddTaskForm addTask={addTask} newTask={newTask} setNewTask={setNewTask} />)
      }
      <TaskList tasks={tasks} setUpdateData={setUpdateData} deleteTask={deleteTask} markTaskDone={markTaskDone} />
    </>
  )
}
export default App
