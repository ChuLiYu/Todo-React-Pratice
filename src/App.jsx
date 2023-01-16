import { useState, useMemo } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm'
import TaskList from './components/TaskList'


// context (global state)





function App() {
  // theme
  // const [mode, setMode] = useState("dark")
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: mode,
  //         background: {
  //           dark: "hsl(230, 17%, 14%)",
  //           light: "hsl(0, 0%, 100%)"
  //         }
  //       }
  //     }),
  //   [mode]
  // );



  const [tasks, setTasks] = useState([

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
      <TaskList setUpdateData={setUpdateData} deleteTask={deleteTask} markTaskDone={markTaskDone} />
    </>

  )
}
export default App
